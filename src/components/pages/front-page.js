import React from 'react';

import Features from './frontpage/Features';
import PricingContainer from '../../containers/PricingContainer';
import Speakers from './frontpage/Speakers';
import Location from './frontpage/Location';

import Testimonials from './frontpage/Testimonials';


export default () => (
  <div id="front-page-container">
    <Features />
    <Testimonials />
    <Speakers />
    <PricingContainer />
    <Location />
  </div>
)
