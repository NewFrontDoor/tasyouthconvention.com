import { connect } from 'react-redux';
import RegisterGroupPage from '../components/pages/register-group';

import { createRegistration } from '../actions/group-registration';
import { GROUP_REGISTRATION_STATE_KEY } from '../reducers/group-registrations';

const mapStateToProps = (state, ownProps) => {
  return {
    registrationState: state[GROUP_REGISTRATION_STATE_KEY],
    registrationDetails: state[GROUP_REGISTRATION_STATE_KEY].details
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitRegistration: (details) => dispatch(createRegistration(details))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterGroupPage);
