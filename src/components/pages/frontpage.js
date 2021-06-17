import React from 'react';

import Features from './frontpage/Features';
//import PricingContainer from '../../containers/PricingContainer'; //TYC Weekend
import Speakers from './frontpage/Speakers';
import Location from './frontpage/Location';
import WhatIsTYC from './frontpage/WhatIsTYC';
import PricingYouthLeaderTrainingContainer from '../../containers/PricingYouthLeaderTrainingContainer';
import EventsContainer from './frontpage/EventsContainer';

export default () => (
  <div id="front-page-container">
    <WhatIsTYC />
    <EventsContainer/>
    {/*<Features />/*}
    {/*<Speakers />*/}
    {/*<PricingYouthLeaderTrainingContainer/>*/}
    {/*<PricingContainer/>*/}
    <Location />
  </div>
)
