import { connect } from 'react-redux';

import Pricing from '../components/pages/frontpage/Pricing';

import { areRegistrationsOpen, getCurrentLeaderPrice, getCurrentPrice, earlyBirdApplies } from '../reducers/event-details';

const mapStateToProps = (state) => ({
  registrationsOpen: areRegistrationsOpen(state),
  registrationStartDate: state.eventDetails.details.registrationStartDate,
  leaderPrice: getCurrentLeaderPrice(state),
  currentPrice: getCurrentPrice(state),
  isEarlyBird: earlyBirdApplies(state),
  loading: state.eventDetails.loading
});

export default connect(mapStateToProps)(Pricing);
