import React from 'react';

import Features from './frontpage/Features';
//import PricingContainer from '../../containers/PricingContainer'; //TYC Weekend
import Speakers from './frontpage/Speakers';
import Location from './frontpage/Location';
import WhatIsTYC from './frontpage/WhatIsTYC';
import PricingYouthLeaderTrainingContainer from '../../containers/PricingYouthLeaderTrainingContainer';

export default () => (
  <div id="front-page-container">
    {/*<WhatIsTYC />*/}
    {/*<Features />/*}
    {/*<Speakers />*/}
    <PricingYouthLeaderTrainingContainer/>
    {/*<PricingContainer/>*/}
    <Location />
  </div>
)
