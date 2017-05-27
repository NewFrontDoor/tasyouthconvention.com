import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Sidebar from './components/page/Sidebar';
import Content from './components/page/Content';

import { Row } from 'react-foundation';

class App extends Component {
  render() {
    return (
      <Row className={`App ${this.props.hideSidebar ? "hide-sidebar": ""}`} isExpanded>
        <Sidebar toggleSidebar={this.props.toggleSidebar} />
        <Content />
      </Row>
    );
  }
}

App.propTypes = {
  hideSidebar: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

export default App;
