import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Navbar from './components/page/Navbar';
import Footer from './components/page/Footer';

import Header from './components/pages/frontpage/Header';

import AccommodationPage from './components/pages/accommodation';
import FrontPage from './components/pages/front-page';
import RegisterGroupPageContainer from './containers/RegisterGroupPageContainer';
import RegisterPage from './components/pages/register';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="content-wrapper">
          <Navbar />
          <Route exact path="/" component={Header} />
          <div id="content-container">
            <Route exact path="/" component={FrontPage} />
            <Route path="/accommodation" component={AccommodationPage} />
            <Route path="/register-group" component={RegisterGroupPageContainer} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  hideSidebar: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

export default App;
