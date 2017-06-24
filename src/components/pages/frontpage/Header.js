import React from 'react';
import tycsplash from './tyc-splash-background.jpg';

export default () => (
  <header id="fullwidth" className="homepage" style={{'background-image' : `url('${tycsplash}')`}}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="header-text white text-center text-uppercase">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                <h1 className="titlebg pddn-20-top pddn-20-btm">Tas Youth Convention</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1">
                <h2 className="white">King of the Cosmos</h2>
                <h3 className="mrgn-50-top white sm-title"><span className="date">13 - 15 October/Bicheno, Tasmania</span></h3>
              </div>
            </div>
          </div>
          <div className="arrow text-center"> <i className="fa fa-angle-down fa-4x"></i> </div>
        </div>
      </div>
    </div>
  </header>
)