import React from 'react';
import tycsplash from './TYC Roadshow_Background.png';

export default () => (
  <header id="fullwidth" className="homepage" style={{ 'backgroundImage': `url('${tycsplash}')` }}>
    <div className="header-text white text-center text-uppercase">
      <h1 className="titlebg pddn-20-top pddn-20-btm">TYC Roadshow 2021</h1>
      <h2>Dead or Alive</h2>
      <h3 className="mrgn-50-top white sm-title"><span className="date">26 & 27 March, Tasmania</span></h3>
      <div className="event-locations">
      <h3 className="white sm-title">
        <span className="date">26<sup>th</sup> March 7pm - 930pm<br/><br/>
        <a href="https://crckingston.org.au">CRCK</a><br/><br/>
        <a href="https://goo.gl/maps/hmvS9rptkQQwU89m7"><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;17 Denison St, Kingston</a></span>
      </h3>
      <h3 className="white sm-title">
        <span className="date">27<sup>th</sup> March 7pm - 930pm<br/><br/>
        <a href="https://riverbankcc.org.au/">Riverbank</a><br/><br/>
        <a href="https://goo.gl/maps/PnmAWPay8pFGSAgc7"><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;27 Riverbank Place, Riverside</a></span>
      </h3>
      </div>
    </div>
    <div className="arrow text-center"> <i className="fa fa-angle-down fa-4x"></i> </div>
  </header>
)
