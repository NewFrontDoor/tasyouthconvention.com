import { connect } from 'react-redux';
import RegisterGroupPage from '../components/pages/register-roadshow-south-group';

import { createGroupRegistration, recordPaymentDetails, resetGroupRegistration } from '../actions/roadshow-south-group-registration';

import { ROADSHOW_SOUTH_GROUP_REGISTRATION_STATE_KEY } from '../reducers/roadshow-south-group-registrations';

import { getCurrentLeaderPrice, areRegistrationsOpen, getGroups } from '../reducers/roadshow-south-event-details';
import { getAmountOwing } from '../reducers/roadshow-south-group-registrations';

const mapStateToProps = (state, ownProps) => {
  return {
    registrationState: state[ROADSHOW_SOUTH_GROUP_REGISTRATION_STATE_KEY],
    registrationDetails: state[ROADSHOW_SOUTH_GROUP_REGISTRATION_STATE_KEY].details,
    loadingEventDetails: state.roadshowSouthEventDetails.loading,
    eventDetails: state.roadshowSouthEventDetails.details,
    currentPrice: getCurrentLeaderPrice(state),
    registeredGroups: getGroups(state),
    registrationsOpen: areRegistrationsOpen(state),
    amountOwing: getAmountOwing(state)
  }
};

const mergeProps = (stateProps, { dispatch }, ownProps) => {
  return {
    ...stateProps,
    submitRegistration: (details) => dispatch(createGroupRegistration(details, stateProps.eventDetails.uuid, stateProps.registeredGroups)),
    submitPayment: (data) => dispatch(recordPaymentDetails(data, stateProps.amountOwing, stateProps.registrationDetails.uuid[0].value, stateProps.registrationDetails.field_given_name[0].value, stateProps.registrationDetails.field_family_name[0].value)),
    resetRegistration: () => dispatch(resetGroupRegistration())
  }
};

export default connect(mapStateToProps, null, mergeProps)(RegisterGroupPage);
