import * as types from './action-types';
import fetchFromApi from '../utils/fetchFromApi';

const requestingRoadshowNorthDetails = () => ({
  type: types.REQUESTING_ROADSHOW_NORTH_EVENT_DETAILS
});

const receivedRoadshowNorthDetails = (details) => {
  return ({
    type: types.RECEIVED_ROADSHOW_NORTH_EVENT_DETAILS,
    details: details
  })
};

const receivedRoadshowNorthGroupInfo = (groups) => ({
  type: types.RECEIVED_ROADSHOW_NORTH_GROUP_INFORMATION,
  groups: groups
});

export const getRoadshowNorthDetails = () => (dispatch) => {
  dispatch(requestingRoadshowNorthDetails());

  fetchFromApi('tyc/roadshow-north-event')
    .then(events => {
      const event = events[0]
      dispatch(receivedRoadshowNorthDetails(event));
      if (event.uuid !== undefined) {
        fetchFromApi(`tyc/groups/${event.uuid}`)
          .then(data => {
            dispatch(receivedRoadshowNorthGroupInfo(data))
          });
      }
    });
}
