import content from './content-reducer.js';
import page from './page-context.js';
import eventDetails from './event-details.js';
import youthTrainingEventDetails from './youth-training-event-details'
import { GROUP_REGISTRATION_STATE_KEY, default as groupRegistration } from './group-registrations';
import { INDIVIDUAL_REGISTRATION_STATE_KEY, default as individualRegistration } from './individual-registrations';
import { YOUTH_TRAINING_REGISTRATION_STATE_KEY, default as youthLeaderTrainingRegistration } from './youth-training-registrations';


import { reducer as form } from 'redux-form';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  content,
  page,
  form,
  eventDetails,
  youthTrainingEventDetails,
  [GROUP_REGISTRATION_STATE_KEY]: groupRegistration,
  [INDIVIDUAL_REGISTRATION_STATE_KEY]: individualRegistration,
  [YOUTH_TRAINING_REGISTRATION_STATE_KEY]: youthLeaderTrainingRegistration
});

export default rootReducer;
