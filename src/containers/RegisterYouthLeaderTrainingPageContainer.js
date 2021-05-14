import { connect } from 'react-redux';
import RegisterPage from '../components/pages/register-youth-leader-training';

import { createRegistration, recordPaymentDetails, resetIndividualRegistration } from '../actions/youth-training-registration';

import { YOUTH_TRAINING_REGISTRATION_STATE_KEY } from '../reducers/youth-training-registrations';

import { getCurrentPrice, areRegistrationsOpen, getGroups } from '../reducers/youth-training-event-details';
import { getAmountOwing } from '../reducers/youth-training-registrations';

const mapStateToProps = (state, ownProps) => {
  return {
    registrationState: state[YOUTH_TRAINING_REGISTRATION_STATE_KEY],
    registrationDetails: state[YOUTH_TRAINING_REGISTRATION_STATE_KEY].details,
    loadingEventDetails: state.youthTrainingEventDetails.loading,
    eventDetails: state.youthTrainingEventDetails.details,
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
    submitPayment: (data) => dispatch(recordPaymentDetails(data, stateProps.amountOwing, stateProps.registrationDetails.uuid[0].value, stateProps.registrationDetails.field_given_name[0].value,  stateProps.registrationDetails.field_family_name[0].value)),
    resetRegistration: () => dispatch(resetIndividualRegistration())
  }
};

export default connect(mapStateToProps, null, mergeProps)(RegisterPage);
