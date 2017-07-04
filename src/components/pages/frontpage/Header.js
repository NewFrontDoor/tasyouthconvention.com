import React from 'react';
import tycsplash from './tyc-splash-background.jpg';

export default () => (
  <header id="fullwidth" className="homepage" style={{'backgroundImage' : `url('${tycsplash}')`}}>
    <div className="header-text white text-center text-uppercase">
      <h1 className="titlebg pddn-20-top pddn-20-btm">Tas Youth Convention</h1>
      <h2 className="tyc-yellow">King of the Cosmos</h2>
      <h3 className="mrgn-50-top white sm-title"><span className="date">13 - 15 October/Bicheno, Tasmania</span></h3>
    </div>
    <div className="arrow text-center"> <i className="fa fa-angle-down fa-4x"></i> </div>
  </header>
)
