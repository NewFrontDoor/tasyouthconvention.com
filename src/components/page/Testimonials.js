import React from 'react';
import logo from './inner-logo-white.png';

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
            <p className="lead-sm text-uppercase"> Innovation is the key.<br/>
              Knowledge is the source. <br/>
              Creativity is the magic. <br/>
            </p>
            <p className="mrgn-20-top"><a href="speaker-details.html" className="btn btn-main-color">Speakers <i className="fa fa-long-arrow-right"></i></a></p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="dark-box pddn-50">
            <p className="mrgn-20-btm"> <img src={logo} width="65" height="37" className="img-responsive" alt="New York Web Buzz" /></p>
            <p className="lead-sm text-uppercase">Listen to people like you will share experience leading to success </p>
            <p className="lead-sm text-uppercase"> Success is the goal. <br/>
              Experience is the medium. <br/>
              Work is all you need to do. <br/>
            </p>
            <p className="mrgn-20-top"><a href="schedule.html" className="btn btn-main-color">Lectures <i className="fa fa-long-arrow-right"></i></a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
