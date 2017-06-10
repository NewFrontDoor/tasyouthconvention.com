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

export const createRegistration = (details) => (dispatch) => {
  dispatch(savingRegistration());

  fetchText('session/token')
    .then(data => data.text())
    .then(csrfToken => {
      const postData = Object.assign(
        {
          "_links": {"type": { "href": "http://tasyouthconvention.vision100it.org/rest/type/node/group_registration" } },
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
