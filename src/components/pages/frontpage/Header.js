import React from 'react';
import tycsplash from './Back II.jpg';

export default () => (
  <header id="fullwidth" className="homepage" style={{ 'backgroundImage': `url('${tycsplash}')` }}>
    <div className="header-text white text-center text-uppercase">
      <h1 className="titlebg pddn-20-top pddn-20-btm">Tas Youth Convention 2020</h1>
      <h2>Real Saviour, Real Change</h2>
      <h3 className="mrgn-50-top white sm-title"><span className="date">9 & 10 October, Tasmania</span></h3>
      <div className="event-locations">
      <h3 className="white sm-title">
        <span className="date">9<sup>th</sup> October 7pm - 930pm<br/><br/>
        <a href="https://crckingston.org.au">CRCK</a><br/><br/>
        <a href="https://goo.gl/maps/hmvS9rptkQQwU89m7"><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;17 Denison St, Kingston</a></span>
      </h3>
      <h3 className="white sm-title">
        <span className="date">10<sup>th</sup> October 7pm - 930pm<br/><br/>
        <a href="https://riverbankcc.org.au/">Riverbank</a><br/><br/>
        <a href="https://goo.gl/maps/PnmAWPay8pFGSAgc7"><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;27 Riverbank Place, Riverside</a></span>
      </h3>
      </div>
    </div>
    <div className="arrow text-center"> <i className="fa fa-angle-down fa-4x"></i> </div>
  </header>
)
