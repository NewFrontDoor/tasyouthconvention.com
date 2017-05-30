import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Navbar from './components/page/Navbar';
import Footer from './components/page/Footer';

import AccommodationPage from './components/pages/accommodation';
import FrontPage from './components/pages/front-page';
import RegisterGroupPage from './components/pages/register-group';
import RegisterPage from './components/pages/register';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <Navbar />
        <Router>
          <div id="content-wrapper">
            <Route exact path="/" component={FrontPage} />
            <Route path="/accommodation" component={AccommodationPage} />
            <Route path="/register-group" component={RegisterGroupPage} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  hideSidebar: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

export default App;
