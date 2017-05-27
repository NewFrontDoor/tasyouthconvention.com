import React from 'react';
import { Column } from 'react-foundation';

import PeopleContainer from '../PeopleContainer';
import BasicContentContainer from '../../containers/BasicContentContainer';

import RegisterGroupForm from '../forms/register-group';

import logo from './logo.svg';


const formSubmit = (values) => {
  console.log('form submitted');
  console.log(values);
};

export default () => {
  return (
    <Column className="content">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <PeopleContainer />
      <BasicContentContainer path="/accommodation" />
      <RegisterGroupForm onSubmit={formSubmit} />
    </Column>
  )
}
