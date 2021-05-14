import * as types from './action-types';
import fetchFromApi from '../utils/fetchFromApi';

const requestingYouthTrainingDetails = () => ({
  type: types.REQUESTING_YOUTH_TRAINING_EVENT_DETAILS
});

const receivedYouthTrainingDetails = (details) => ({
  type: types.RECEIVED_YOUTH_TRAINING_EVENT_DETAILS,
  details: details
});

const receivedYouthTrainingGroupInfo = (groups) => ({
  type: types.RECEIVED_YOUTH_TRAINING_GROUP_INFORMATION,
  youthTrainingGroups: groups
});

export const getYouthTrainingDetails = () => (dispatch) => {
  dispatch(requestingYouthTrainingDetails());

  fetchFromApi('tyc/leader-training-event')
    .then(events => {
      const event = events[0]
      dispatch(receivedYouthTrainingDetails(event));

      if (event.uuid !== undefined) {
        fetchFromApi(`tyc/groups/${event.uuid}`)
          .then(data => {
            dispatch(receivedYouthTrainingGroupInfo(data))
          });
      }
    });
}
