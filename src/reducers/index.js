import content from './content-reducer.js';
import page from './page-context.js';
import eventDetails from './event-details.js';
import youthTrainingEventDetails from './youth-training-event-details';
import roadshowNorthEventDetails from './roadshow-north-event-details.js';
import roadshowSouthEventDetails from './roadshow-south-event-details.js';
import { GROUP_REGISTRATION_STATE_KEY, default as groupRegistration } from './group-registrations';
import { INDIVIDUAL_REGISTRATION_STATE_KEY, default as individualRegistration } from './individual-registrations';
import { YOUTH_TRAINING_REGISTRATION_STATE_KEY, default as youthLeaderTrainingRegistration } from './youth-training-registrations';
import { ROADSHOW_NORTH_REGISTRATION_STATE_KEY, default as roadshowNorthRegistration } from './roadshow-north-registrations';
import { ROADSHOW_SOUTH_REGISTRATION_STATE_KEY, default as roadshowSouthRegistration } from './roadshow-south-registrations';
import { ROADSHOW_NORTH_GROUP_REGISTRATION_STATE_KEY, default as roadshowNorthGroupRegistration } from './roadshow-north-group-registrations';
import { ROADSHOW_SOUTH_GROUP_REGISTRATION_STATE_KEY, default as roadshowSouthGroupRegistration } from './roadshow-south-group-registrations';

import { reducer as form } from 'redux-form';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  content,
  page,
  form,
  eventDetails,
  youthTrainingEventDetails,
  roadshowNorthEventDetails,
  roadshowSouthEventDetails,
  [GROUP_REGISTRATION_STATE_KEY]: groupRegistration,
  [INDIVIDUAL_REGISTRATION_STATE_KEY]: individualRegistration,
  [YOUTH_TRAINING_REGISTRATION_STATE_KEY]: youthLeaderTrainingRegistration,
  [ROADSHOW_NORTH_REGISTRATION_STATE_KEY]: roadshowNorthRegistration,
  [ROADSHOW_SOUTH_REGISTRATION_STATE_KEY]: roadshowSouthRegistration,
  [ROADSHOW_NORTH_GROUP_REGISTRATION_STATE_KEY]: roadshowNorthGroupRegistration,
  [ROADSHOW_SOUTH_GROUP_REGISTRATION_STATE_KEY]: roadshowSouthGroupRegistration
});

export default rootReducer;
