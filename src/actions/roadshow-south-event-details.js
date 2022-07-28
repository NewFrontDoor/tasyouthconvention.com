import * as types from './action-types';
import fetchFromApi from '../utils/fetchFromApi';

const requestingRoadshowSouthDetails = () => ({
  type: types.REQUESTING_ROADSHOW_SOUTH_EVENT_DETAILS
});

const receivedRoadshowSouthDetails = (details) => ({
  type: types.RECEIVED_ROADSHOW_SOUTH_EVENT_DETAILS,
  details: details
});

const receivedRoadshowSouthGroupInfo = (groups) => ({
  type: types.RECEIVED_ROADSHOW_SOUTH_GROUP_INFORMATION,
  groups: groups
});

export const getRoadshowSouthDetails = () => (dispatch) => {
  dispatch(requestingRoadshowSouthDetails());

  fetchFromApi('tyc/roadshow-south-event')
    .then(events => {
      const event = events[0];
      dispatch(receivedRoadshowSouthDetails(event));

      if (event.uuid !== undefined) {
        fetchFromApi(`tyc/groups/${event.uuid}`)
          .then(data => {
            dispatch(receivedRoadshowSouthGroupInfo(data))
          });
      }
    });
}
