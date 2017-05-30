import React from 'react';

import Header from './frontpage/Header';
import ComingSoon from './frontpage/ComingSoon';
import Features from './frontpage/Features';
import Pricing from './frontpage/Pricing';
import Speakers from './frontpage/Speakers';

import Testimonials from './frontpage/Testimonials';


export default () => (
  <div id="front-page-container">
    <Header />
    <Features />
    <Testimonials />
    <Speakers />
    <Pricing />
  </div>
)
