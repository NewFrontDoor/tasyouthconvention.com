import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import { FrontPageNavbar, OtherPageNavbar } from './components/page/Navbar';
import { FrontPageFooter, OtherPageFooter } from './components/page/Footer';

import TYLTHeader from './components/pages/tylt/Header';
import FrontPageHeader from './components/pages/frontpage/Header';

import FrontPage from './components/pages/frontpage';
import TYLTPage from './components/pages/tylt';
import TYCWeekendHeader from './components/pages/tyc-weekend/Header'
import TYCWeekendPage from './components/pages/tyc-weekend'
import TalksPage from './components/pages/talks/talks-page';
import AccommodationPage from './components/pages/accommodation';


import RegisterGroupPageContainer from './containers/RegisterGroupPageContainer';
import RegisterIndividualContainer from './containers/RegisterPageContainer';


import { BrowserRouter as Router, Route } from 'react-router-dom';
import faqPage from './components/pages/faq/faq-page';
import RegisterYouthLeaderTrainingPageContainer from './containers/RegisterYouthLeaderTrainingPageContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="content-wrapper">
          <Route exact path="/" component={FrontPageNavbar} />
          <Route path="/:path" component={OtherPageNavbar} />
          {/*<Route exact path="/" component={FrontPageHeader} />*/}
          <div id="content-container">
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/tylt" component={TYLTHeader} />
            <Route exact path="/tylt" component={TYLTPage} />
            <Route exact path="/tyc-weekend" component={TYCWeekendHeader} />
            <Route exact path="/tyc-weekend" component={TYCWeekendPage} />
            <Route exact path="/Talks" component={TalksPage} />
            <Route exact path="/FAQ" component={faqPage} />
            <Route path="/accommodation" component={AccommodationPage} />
            <Route path="/tyc-weekend/register" component={RegisterIndividualContainer} />
            <Route path="/tyc-weekend/register-group" component={RegisterGroupPageContainer} />
            <Route path="/register-tylt" component={RegisterYouthLeaderTrainingPageContainer} />
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
