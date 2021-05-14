import { connect } from 'react-redux';

import Pricing from '../components/pages/frontpage/PricingYouthLeaderTraining';

import { areRegistrationsOpen, getCurrentLeaderPrice, getCurrentPrice, earlyBirdApplies } from '../reducers/youth-training-event-details';

const mapStateToProps = (state) => ({
  registrationsOpen: areRegistrationsOpen(state),
  registrationStartDate: state.youthTrainingEventDetails.details.registrationStartDate,
  leaderPrice: getCurrentLeaderPrice(state),
  currentPrice: getCurrentPrice(state),
  isEarlyBird: earlyBirdApplies(state),
  loading: state.youthTrainingEventDetails.loading
});

export default connect(mapStateToProps)(Pricing);
