import React from 'react';

import Header from './frontpage/Header';
import ComingSoon from './frontpage/ComingSoon';
import Features from './frontpage/Features';
import Pricing from './frontpage/Pricing';
import Speakers from './frontpage/Speakers';
import Location from './frontpage/Location';

import Testimonials from './frontpage/Testimonials';


export default () => (
  <div id="front-page-container">
    <Features />
    <Testimonials />
    <Speakers />
    <Pricing />
    <Location />
  </div>
)
