import { postEntityToApi } from '../utils/fetchFromApi';
import { getTypeObject, getRelationshipObject, mapFormValuesToHalFormat } from '../utils/drupal';
import { find, omit } from 'lodash';

import * as types from './action-types';

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

export const createGroupRegistration = (details, eventUuid, existingGroups) => (dispatch) => {
  dispatch(savingRegistration());

  var groupUuid = new Promise(function(resolve, reject) {
    var existingGroup = find(existingGroups, g => g.title === details.youthGroup);
    if (existingGroup === undefined) {
      // create group
      const groupPostData = Object.assign(
        getTypeObject('youth_group'),
        getRelationshipObject('youth_group',[{field: 'field_event', value: eventUuid}]),
        mapFormValuesToHalFormat({title: details.youthGroup})
      )
      postEntityToApi(groupPostData)
        .then(data => {
          resolve(data.uuid[0].value);
        });
    } else {
      resolve(existingGroup.uuid);
    }
  });


  groupUuid.then(groupUuid => {
    const postData = Object.assign(
      getTypeObject('group_registration'),
      getRelationshipObject('group_registration', [
        {field:'field_event', value: eventUuid},
        {field:'field_youth_group', value: groupUuid}
      ]),
      mapFormValuesToHalFormat(omit({
        ...details,
        title: `${details.field_given_name} ${details.field_family_name}`,
      }, 'youthGroup'))
    );

    postEntityToApi(postData)
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
