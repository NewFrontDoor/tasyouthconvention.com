import { connect } from 'react-redux';
import RegisterGroupPage from '../components/pages/register-group';

import { createGroupRegistration, recordPaymentDetails, resetGroupRegistration } from '../actions/group-registration';

import { GROUP_REGISTRATION_STATE_KEY } from '../reducers/group-registrations';

import { getCurrentLeaderPrice, areRegistrationsOpen, getGroups } from '../reducers/event-details';
import { getAmountOwing } from '../reducers/group-registrations';

const mapStateToProps = (state, ownProps) => {
  return {
    registrationState: state[GROUP_REGISTRATION_STATE_KEY],
    registrationDetails: state[GROUP_REGISTRATION_STATE_KEY].details,
    loadingEventDetails: state.eventDetails.loading,
    eventDetails: state.eventDetails.details,
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
    submitPayment: (data) => dispatch(recordPaymentDetails(data, stateProps.amountOwing, stateProps.registrationDetails.uuid[0].value, stateProps.registrationDetails.field_given_name[0].value,  stateProps.registrationDetails.field_family_name[0].value)),
    resetRegistration: () => dispatch(resetGroupRegistration())
  }
};

export default connect(mapStateToProps, null, mergeProps)(RegisterGroupPage);
