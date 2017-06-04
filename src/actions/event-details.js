import * as types from './action-types';
import fetch from 'isomorphic-fetch';

const requestingDetails = () => ({
  type: types.REQUESTING_LATEST_EVENT_DETAILS
});

const receivedDetails = (details) => ({
  type: types.RECEIVED_LATEST_EVENT_DETAILS,
  details: details
});


export const getLatestEventDetails = () => (dispatch) => {
  dispatch(requestingDetails());

  return fetch('http://tasyouthconvention.vision100it.org/tyc/latest-event')
    .then(response => response.json())
    .then(event => dispatch(receivedDetails(event[0])));
}
