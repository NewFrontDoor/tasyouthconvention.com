import React from 'react';

import Features from './frontpage/Features';
import PricingContainer from '../../containers/PricingContainer';
import Speakers from './frontpage/Speakers';
import Location from './frontpage/Location';
import WhatIsTYC from './frontpage/WhatIsTYC';

export default () => (
  <div id="front-page-container">
    <WhatIsTYC />
    <Features />
    <Speakers />
    <PricingContainer />
    <Location />
  </div>
)
