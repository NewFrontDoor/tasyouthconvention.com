import { fetchText, default as fetchFromApi } from '../utils/fetchFromApi';
import * as types from './action-types';

import { mapValues, omit } from 'lodash';


const savingRegistration = () => ({
  type: types.SAVING_GROUP_REGISTRATION
});

const errorSavingRegistration= (error) => ({
  type: types.ERROR_SAVING_GROUP_REGISTRATION,
  error
});

const savedRegistration = (details) => ({
  type: types.SAVED_GROUP_REGISTRATION,
  details
});

const savingPaymentDetails = () => ({
  type: types.SAVING_LEADER_PAYMENT_DETAILS
});

const errorSavingPaymentDetails = (error) => ({
  type: types.ERROR_SAVING_LEADER_PAYMENT_DETAILS,
  error
});

const savedPaymentDetails = (details) => ({
  type: types.SAVED_LEADER_PAYMENT_DETAILS
});

export const resetGroupRegistration = () => ({
  type: types.RESET_GROUP_REGISTRATION
});

export const createRegistration = (details, eventUuid) => (dispatch) => {
  dispatch(savingRegistration());

  fetchText('session/token')
    .then(data => data.text())
    .then(csrfToken => {
      const postData = Object.assign(
        {
          "_links": {"type": { "href": "http://tasyouthconvention.vision100it.org/rest/type/node/group_registration" } },
          "_embedded": { "http://tasyouthconvention.vision100it.org/rest/relation/node/group_registration/field_event": [{"uuid": [{"value": eventUuid}]}]},
          "type":[{"target_id": "group_registration"}]
        },
        mapValues(omit(details, 'recaptchaKey'), v => [{'value': v }])
      );

      fetchFromApi('entity/node', {
        method: 'POST',
        headers: {
          'X-CSRF-Token': csrfToken,
          'Content-type': 'application/hal+json'
        },
        body: JSON.stringify(postData)
      })
        .then(data => {
          console.log('successfully saved the registration response was ', data);
          dispatch(savedRegistration(data));
        }).catch((ex) => {
          console.log('problem saving the registration ', ex);
          dispatch(errorSavingRegistration(ex));
        });
    });
}

export const recordPaymentDetails = (paymentDetails, amountPaid, registrationId, givenName, familyName) => (dispatch) => {
  dispatch(savingPaymentDetails());

  fetchText('session/token')
    .then(data => data.text())
    .then(csrfToken => {
      const postData = Object.assign({
          "_links": {"type": { "href": "http://tasyouthconvention.vision100it.org/rest/type/node/payment" } },
          "type": [{"target_id": "payment"}]
        },
        mapValues({
          field_payer_id: paymentDetails.payerID,
          field_payment_id: paymentDetails.paymentID,
          field_payment_token: paymentDetails.paymentToken,
          field_amount_paid: amountPaid,
          field_registration_id: registrationId,
          field_given_name: givenName,
          field_family_name: familyName,
          title: `Payment for Registration ${registrationId}`,

         }, v => [{'value': v}])
      );
      fetchFromApi('entity/node', {
        method: 'POST',
        headers: {
          'X-CSRF-Token': csrfToken,
          'Content-type': 'application/hal+json'
        },
        body: JSON.stringify(postData)
      }).then(data => {
        console.log('successfully saved the payment as ', data);
        dispatch(savedPaymentDetails(data));
      }).catch((ex) => {
        console.log('problem saving the registration ', ex);
        dispatch(errorSavingPaymentDetails(ex));
      });
    })


}
