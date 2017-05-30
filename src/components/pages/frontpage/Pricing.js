import React from 'react';

export default () => (
  <section id="pricing">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title-white">
            <h2 className="text-center"><span>Registration</span></h2>
            <p className="subtitle white text-center">Register here for the Tas Youth Convention</p>
            <p className="subtitle text-center"><i className="fa fa-angle-down fa-lg white"></i></p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="white-bg">
            <div className="ribbon-wrapper-dark">
              <div className="ribbon-dark">Early Bird</div>
            </div>
            <h3 className="text-uppercase text-center pddn-20-top pddn-10-btm">Register for TYC</h3>
            <div className="accent-bg pddn-20-top-btm text-center">
              <p className="price">$<span className="text-bigger">45</span></p>
            </div>
            <ul className="list-pricing">
              <li>Register here </li>
              <li>book and pay </li>
              <li>to attend TYC </li>
            </ul>
            <p className=" pddn-20-btm text-center"><a href="#tickets" className="btn btn-main-ghost">Book a Ticket</a></p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="white-bg">
            <h3 className="text-uppercase text-center pddn-20-top pddn-10-btm">Register Your Group</h3>
            <div className="accent-bg pddn-20-top-btm text-center">
              <p className="price"><span className="text-bigger"><i className="fa fa-group"></i></span></p>
            </div>
            <ul className="list-pricing">
              <li>If you are a youth leader </li>
              <li>Register here for your</li>
              <li>youth group to attend TYC</li>
            </ul>
            <p className=" pddn-20-btm text-center"><a href="#tickets" className="btn btn-main-ghost">Register your Group</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
