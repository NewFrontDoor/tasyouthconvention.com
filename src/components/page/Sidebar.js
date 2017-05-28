import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './Sidebar.css';

const Sidebar = ({toggleSidebar}) => {
  return (
    <div className="sidebar col-sm-12 col-md-3">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
    </div>
  );
};

Sidebar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired
};

export default Sidebar;
