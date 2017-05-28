import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import PeopleContainer from '../PeopleContainer';

import logo from './logo.svg';


import AccommodationPage from '../pages/accommodation';
import RegisterGroupPage from '../pages/register-group';

export default () => {
  return (
    <div className="content">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <PeopleContainer />
      <Router>
        <div>
          <Route exact path="/" component={AccommodationPage} />
          <Route path="/accommodation" component={AccommodationPage} />
          <Route path="/register-group" component={RegisterGroupPage} />
        </div>
      </Router>
    </div>
  )
}
