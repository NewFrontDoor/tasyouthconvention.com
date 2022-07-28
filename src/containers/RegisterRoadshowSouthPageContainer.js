import { connect } from 'react-redux';
import RegisterPage from '../components/pages/register-roadshow-south';

import { createRegistration, recordPaymentDetails, resetIndividualRegistration } from '../actions/roadshow-south-registration';

import { ROADSHOW_SOUTH_REGISTRATION_STATE_KEY } from '../reducers/roadshow-south-registrations';

import { getCurrentPrice, areRegistrationsOpen, getGroups } from '../reducers/roadshow-south-event-details';
import { getAmountOwing } from '../reducers/roadshow-south-registrations';

const mapStateToProps = (state, ownProps) => {
  return {
    registrationState: state[ROADSHOW_SOUTH_REGISTRATION_STATE_KEY],
    registrationDetails: state[ROADSHOW_SOUTH_REGISTRATION_STATE_KEY].details,
    loadingEventDetails: state.roadshowSouthEventDetails.loading,
    eventDetails: state.roadshowSouthEventDetails.details,
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
