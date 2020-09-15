import React from 'react';
import tycsplash from './Back II.jpg';

export default () => (
  <header id="fullwidth" className="homepage" style={{ 'backgroundImage': `url('${tycsplash}')` }}>
    <div className="header-text white text-center text-uppercase">
      <h1 className="titlebg pddn-20-top pddn-20-btm">Tas Youth Convention 2020</h1>
      <h2>Real Saviour, Real Change</h2>
      <h3 className="mrgn-50-top white sm-title"><span className="date">9 & 10 October, Tasmania</span></h3>
    </div>
    <div className="arrow text-center"> <i className="fa fa-angle-down fa-4x"></i> </div>
  </header>
)
