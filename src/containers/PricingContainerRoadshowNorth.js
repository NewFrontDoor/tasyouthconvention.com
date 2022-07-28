import { connect } from 'react-redux';

import Pricing from '../components/pages/roadshow-north/PricingRoadshowNorth'

import { areRegistrationsOpen, getCurrentLeaderPrice, getCurrentPrice, earlyBirdApplies } from '../reducers/roadshow-north-event-details';

const mapStateToProps = (state) => ({
  registrationsOpen: areRegistrationsOpen(state),
  registrationStartDate: state.roadshowNorthEventDetails.details.registrationStartDate,
  leaderPrice: getCurrentLeaderPrice(state),
  currentPrice: getCurrentPrice(state),
  isEarlyBird: earlyBirdApplies(state),
  loading: state.roadshowNorthEventDetails.loading
});

export default connect(mapStateToProps)(Pricing);
