import * as types from './action-types';
import fetchFromApi from '../utils/fetchFromApi';

const requestingDetails = () => ({
  type: types.REQUESTING_LATEST_EVENT_DETAILS
});

const receivedDetails = (details) => ({
  type: types.RECEIVED_LATEST_EVENT_DETAILS,
  details: details
});


export const getLatestEventDetails = () => (dispatch) => {
  dispatch(requestingDetails());

  return fetchFromApi('/tyc/latest-event')
    .then(event => dispatch(receivedDetails(event[0])));
}
