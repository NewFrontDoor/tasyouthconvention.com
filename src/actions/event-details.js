import * as types from './action-types';
import fetchFromApi from '../utils/fetchFromApi';

const requestingDetails = () => ({
  type: types.REQUESTING_LATEST_EVENT_DETAILS
});

const receivedDetails = (details) => ({
  type: types.RECEIVED_LATEST_EVENT_DETAILS,
  details: details
});

const receivedGroupInfo = (groups) => ({
  type: types.RECEIVED_GROUP_INFORMATION,
  groups: groups
});

export const getLatestEventDetails = () => (dispatch) => {
  dispatch(requestingDetails());

  fetchFromApi('tyc/latest-event')
    .then(events => {
      const event = events[0]
      dispatch(receivedDetails(event));

      if (event.uuid !== undefined) {
        fetchFromApi(`tyc/groups/${event.uuid}`)
          .then(data => {
            dispatch(receivedGroupInfo(data))
          });
      }
    });
}
