import React from 'react';
import logo from './tyc-white.png';

export default () => (
  <section id="highlight">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title-white">
            <h2 className="text-center"><span>Testimonials</span></h2>
            <p className="subtitle white text-center">Find out what other people think of the Tasmanian Youth Convention</p>
            <p className="subtitle text-center"><i className="fa fa-angle-down fa-lg white"></i></p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="dark-box pddn-50">
            <p className="mrgn-20-btm"> <img src={logo} width="65" height="37" className="img-responsive" alt="New York Web Buzz" /></p>
            <p className="lead-sm text-uppercase"> is an inspirational event which will
              make you think, learn  and create. </p>
            <p className="lead-sm text-uppercase"> Great Time.<br/>
              Great Talks. <br/>
              Great Fun. <br/>
            </p>
            <p className="mrgn-20-top"><a href="speaker-details.html" className="btn btn-main-color">Register Now <i className="fa fa-long-arrow-right"></i></a></p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="dark-box pddn-50">
            <p className="mrgn-20-btm"> <img src={logo} width="65" height="37" className="img-responsive" alt="New York Web Buzz" /></p>
            <p className="lead-sm text-uppercase">Listen to people talk </p>
            <p className="lead-sm text-uppercase"> Ipso Facto <br/>
              Long Talks <br/>
              Mare Nostrum <br/>
            </p>
            <p className="mrgn-20-top"><a href="schedule.html" className="btn btn-main-color">Find It <i className="fa fa-long-arrow-right"></i></a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
