import React from 'react';

import Features from './frontpage/Features';
import PricingContainer from '../../containers/PricingContainer';
import Speakers from './frontpage/Speakers';
import Location from './frontpage/Location';

export default () => (
  <div id="front-page-container">
    <Features />
    <Speakers />
    <PricingContainer />
    <Location />
  </div>
)
