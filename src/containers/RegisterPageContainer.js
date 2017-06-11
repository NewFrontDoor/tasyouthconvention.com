import { connect } from 'react-redux';
import RegisterPage from '../components/pages/register';

import { createRegistration, recordPaymentDetails } from '../actions/individual-registration';

import { INDIVIDUAL_REGISTRATION_STATE_KEY } from '../reducers/individual-registrations';

import { getCurrentPrice, areRegistrationsOpen, getGroups } from '../reducers/event-details';
import { getAmountOwing } from '../reducers/individual-registrations';

const mapStateToProps = (state, ownProps) => {
  return {
    registrationState: state[INDIVIDUAL_REGISTRATION_STATE_KEY],
    registrationDetails: state[INDIVIDUAL_REGISTRATION_STATE_KEY].details,
    loadingEventDetails: state.eventDetails.loading,
    eventDetails: state.eventDetails.details,
    currentPrice: getCurrentPrice(state),
    registeredGroups: getGroups(state),
    registrationsOpen: areRegistrationsOpen(state),
    amountOwing: getAmountOwing(state)
  }
};

const mergeProps = (stateProps, { dispatch }, ownProps) => {
  return {
    ...stateProps,
    submitRegistration: (details) => dispatch(createRegistration(details, stateProps.eventDetails.uuid)),
    submitPayment: (data) => dispatch(recordPaymentDetails(data, stateProps.amountOwing, stateProps.registrationDetails.nid[0].value, stateProps.registrationDetails.field_given_name[0].value,  stateProps.registrationDetails.field_family_name[0].value))
  }
};

export default connect(mapStateToProps, null, mergeProps)(RegisterPage);
