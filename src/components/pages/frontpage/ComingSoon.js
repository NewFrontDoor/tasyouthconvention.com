import React from 'react';

export default () => (
  <header className="fullwidth homepage">
    <div className="content-overlay-counter text-center">
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
          <h1 className="titlebg pddn-20-top pddn-20-btm">New York Web Buzz</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h2 className="white">Tickets will be available soon</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <div id="LaunchCountdown"></div>
          <form className="form-inline" id="newsletterForm" noValidate style={{'visibility': 'visible', 'animationName': 'zoomIn'}}>
            <div className="form-group">
              <label className="sr-only" htmlFor="Email"></label>
              <p className="help-block text-danger"></p>
            </div>
            <button type="submit" className="btn btn-main-color">Subscribe</button>
            <div id="success"></div>
          </form>
        </div>
      </div>
    </div>
  </header>
)
