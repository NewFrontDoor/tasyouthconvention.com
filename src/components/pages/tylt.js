import React from 'react';

//import Features from './tylt/Features';
//import PricingContainer from '../../containers/PricingContainer'; //TYC Weekend
//import Speakers from './tylt/Speakers';
import Location from './tylt/Location';
//import WhatIsTYC from './tylt/WhatIsTYC';
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
