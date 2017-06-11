import { postEntityToApi } from '../utils/fetchFromApi';
import { getTypeObject, getRelationshipObject, mapFormValuesToHalFormat } from '../utils/drupal';

import * as types from './action-types';

const savingRegistration = () => ({
  type: types.SAVING_INDIVIDUAL_REGISTRATION
});

const errorSavingRegistration= (error) => ({
  type: types.ERROR_SAVING_INDIVIDUAL_REGISTRATION,
  error
});

const savedRegistration = (details) => ({
  type: types.SAVED_INDIVIDUAL_REGISTRATION,
  details
});

const savingPaymentDetails = () => ({
  type: types.SAVING_INDIVIDUAL_PAYMENT_DETAILS
});

const errorSavingPaymentDetails = (error) => ({
  type: types.ERROR_SAVING_INDIVIDUAL_PAYMENT_DETAILS,
  error
});

const savedPaymentDetails = (details) => ({
  type: types.SAVED_INDIVIDUAL_PAYMENT_DETAILS
});

export const resetGroupRegistration = () => ({
  type: types.RESET_INDIVIDUAL_REGISTRATION
});


export const createRegistration = (details, eventUuid) => (dispatch) => {
  dispatch(savingRegistration());

  const postData = Object.assign(
    getTypeObject('registration'),
    getRelationshipObject('registration', [{field: 'field_event', value: eventUuid}]),
    mapFormValuesToHalFormat(details)
  );

  postEntityToApi(postData)
    .then(data => {
      console.log('successfully saved the registration response was ', data);
      dispatch(savedRegistration(data));
    }).catch((ex) => {
      console.log('problem saving the registration ', ex);
      dispatch(errorSavingRegistration(ex));
    });
}

export const recordPaymentDetails = (paymentDetails, amountPaid, registrationId, givenName, familyName) => (dispatch) => {
  dispatch(savingPaymentDetails());

  const postData = Object.assign(
    getTypeObject('payment'),
    mapFormValuesToHalFormat({
      field_payer_id: paymentDetails.payerID,
      field_payment_id: paymentDetails.paymentID,
      field_payment_token: paymentDetails.paymentToken,
      field_amount_paid: amountPaid,
      field_registration_id: registrationId,
      field_given_name: givenName,
      field_family_name: familyName,
      title: `Payment for Registration ${registrationId}`,
     })
  );

  postEntityToApi(postData)
    .then(data => {
      console.log('successfully saved the payment as ', data);
      dispatch(savedPaymentDetails(data));
    }).catch((ex) => {
      console.log('problem saving the registration ', ex);
      dispatch(errorSavingPaymentDetails(ex));
    });
}
