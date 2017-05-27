import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './Sidebar.css';

import { Column } from 'react-foundation'

const Sidebar = ({toggleSidebar}) => {
  return (
    <Column small={12} medium={3} className="sidebar">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
    </Column>
  );
};

Sidebar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired
};

export default Sidebar;
