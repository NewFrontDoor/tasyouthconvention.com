import React from 'react';

//import Features from './tyc-weekend/Features';
import PricingContainer from '../../containers/TYCWeekendPricingContainer';
import Speakers from './tyc-weekend/Speakers';
import Location from './tyc-weekend/Location';
//import WhatIsTYC from './tyc-weekend/WhatIsTYC';

export default () => (
  <div id="front-page-container">
    {/*<WhatIsTYC />*/}
    {/*<Features />*/}
    <Speakers />
    <PricingContainer />
    <Location />
  </div>
)
