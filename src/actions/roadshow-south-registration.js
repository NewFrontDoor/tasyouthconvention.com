import { postEntityToApi } from '../utils/fetchFromApi';
import { getTypeObject, getRelationshipObject, mapFormValuesToHalFormat } from '../utils/drupal';

import { omit } from 'lodash';

import * as types from './action-types';

const savingRegistration = () => ({
  type: types.SAVING_ROADSHOW_SOUTH_REGISTRATION
});

const errorSavingRegistration = (error) => ({
  type: types.ERROR_SAVING_ROADSHOW_SOUTH_REGISTRATION,
  error
});

const savedRegistration = (details) => ({
  type: types.SAVED_ROADSHOW_SOUTH_REGISTRATION,
  details
});

const savingPaymentDetails = () => ({
  type: types.SAVING_ROADSHOW_SOUTH_PAYMENT_DETAILS
});

const errorSavingPaymentDetails = (error) => ({
  type: types.ERROR_SAVING_ROADSHOW_SOUTH_PAYMENT_DETAILS,
  error
});

const savedPaymentDetails = (details) => ({
  type: types.SAVED_ROADSHOW_SOUTH_PAYMENT_DETAILS
});

export const resetIndividualRegistration = () => ({
  type: types.RESET_ROADSHOW_SOUTH_REGISTRATION
});


export const createRegistration = (details, eventUuid) => (dispatch) => {
  dispatch(savingRegistration());

  const relationshipMap = [
    { field: 'field_event', value: eventUuid },
  ];

  if (!!details.field_youth_group && !details.field_no_youth_group) {
    relationshipMap.push({ field: 'field_youth_group', value: details.field_youth_group })
  }

  const postData = Object.assign(
    getTypeObject('registration'),
    getRelationshipObject('registration', relationshipMap),
    mapFormValuesToHalFormat(omit({
      ...details,
      title: `${details.field_given_name} ${details.field_family_name}`
    }, 'field_youth_group'))
  );

  postEntityToApi(postData)
    .then(data => {
      dispatch(savedRegistration(data));
    }).catch((ex) => {
      dispatch(errorSavingRegistration(ex));
    });
}

export const recordPaymentDetails = (paymentDetails, amountPaid, registrationUuid, givenName, familyName) => (dispatch) => {
  dispatch(savingPaymentDetails());

  const postData = Object.assign(
    getTypeObject('payment'),
    /*getRelationshipObject('payment', [
      {field:'field_registration', value: registrationUuid}
    ]),*/
    mapFormValuesToHalFormat({
      field_registration_id: registrationUuid,
      field_payer_id: paymentDetails.payerID,
      field_payment_id: paymentDetails.paymentID,
      field_payment_token: paymentDetails.paymentToken,
      field_amount_paid: amountPaid,
      field_given_name: givenName,
      field_family_name: familyName,
      title: `Payment for ${givenName} ${familyName}`,
    })
  );

  postEntityToApi(postData)
    .then(data => {
      dispatch(savedPaymentDetails(data));
    }).catch((ex) => {
      dispatch(errorSavingPaymentDetails(ex));
    });
}
