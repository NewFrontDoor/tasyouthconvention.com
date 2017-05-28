import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Navbar from './components/page/Navbar';
import Header from './components/page/Header';
import ComingSoon from './components/page/ComingSoon';
import Features from './components/page/Features';
import Testimonials from './components/page/Testimonials';
import Speakers from './components/page/Speakers';
import Pricing from './components/page/Pricing';

class App extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <Navbar />
        <ComingSoon />
        <Header />
        <Features />
        <Testimonials />
        <Speakers />
        <Pricing />
      </div>
    );
  }
}

App.propTypes = {
  hideSidebar: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

export default App;
