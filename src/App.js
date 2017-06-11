import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Navbar from './components/page/Navbar';
import FrontPageFooter from './components/page/FrontPageFooter';
import OtherPageFooter from './components/page/OtherPageFooter';

import Header from './components/pages/frontpage/Header';

import FrontPage from './components/pages/front-page';
import AccommodationPage from './components/pages/accommodation';


import RegisterGroupPageContainer from './containers/RegisterGroupPageContainer';
import RegisterIndividualContainer from './containers/RegisterPageContainer';


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
            <Route path="/register" component={RegisterIndividualContainer} />
            <Route path="/register-group" component={RegisterGroupPageContainer} />
          </div>
          <Route exact path="/" component={FrontPageFooter} />
          <Route path="/:path" component={OtherPageFooter} />
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
