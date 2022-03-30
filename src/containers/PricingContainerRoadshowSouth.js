import { connect } from 'react-redux';

import Pricing from '../components/pages/roadshow-south/PricingRoadshowSouth'

import { areRegistrationsOpen, getCurrentLeaderPrice, getCurrentPrice, earlyBirdApplies } from '../reducers/roadshow-south-event-details';

const mapStateToProps = (state) => ({
  registrationsOpen: areRegistrationsOpen(state),
  registrationStartDate: state.roadshowSouthEventDetails.details.registrationStartDate,
  leaderPrice: getCurrentLeaderPrice(state),
  currentPrice: getCurrentPrice(state),
  isEarlyBird: earlyBirdApplies(state),
  loading: state.roadshowSouthEventDetails.loading
});

export default connect(mapStateToProps)(Pricing);
