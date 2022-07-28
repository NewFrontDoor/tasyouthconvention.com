import { connect } from 'react-redux';
import RegisterPage from '../components/pages/register-roadshow-north';

import { createRegistration, recordPaymentDetails, resetIndividualRegistration } from '../actions/roadshow-north-registration';

import { ROADSHOW_NORTH_REGISTRATION_STATE_KEY } from '../reducers/roadshow-north-registrations';

import { getCurrentPrice, areRegistrationsOpen, getGroups } from '../reducers/roadshow-north-event-details';
import { getAmountOwing } from '../reducers/roadshow-north-registrations';

const mapStateToProps = (state, ownProps) => {
  return {
    registrationState: state[ROADSHOW_NORTH_REGISTRATION_STATE_KEY],
    registrationDetails: state[ROADSHOW_NORTH_REGISTRATION_STATE_KEY].details,
    loadingEventDetails: state.roadshowNorthEventDetails.loading,
    eventDetails: state.roadshowNorthEventDetails.details,
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
    submitPayment: (data) => dispatch(recordPaymentDetails(data, stateProps.amountOwing, stateProps.registrationDetails.uuid[0].value, stateProps.registrationDetails.field_given_name[0].value, stateProps.registrationDetails.field_family_name[0].value)),
    resetRegistration: () => dispatch(resetIndividualRegistration())
  }
};

export default connect(mapStateToProps, null, mergeProps)(RegisterPage);
