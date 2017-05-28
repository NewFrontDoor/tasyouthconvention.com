import React from 'react';

export default () => (
  <section id="pricing">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title-white">
            <h2 className="text-center"><span>Registration</span></h2>
            <p className="subtitle white text-center">Satisne ergo pudori consulat, si quis sine teste libidini pareat</p>
            <p className="subtitle text-center"><i className="fa fa-angle-down fa-lg white"></i></p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <div className="white-bg">
            <div className="ribbon-wrapper-dark">
              <div className="ribbon-dark">Early Bird</div>
            </div>
            <h3 className="text-uppercase text-center pddn-20-top pddn-10-btm">Design Pass</h3>
            <div className="accent-bg pddn-20-top-btm text-center">
              <p className="price">$<span className="text-bigger">358</span></p>
            </div>
            <ul className="list-pricing">
              <li>Attend the design show </li>
              <li>Access to all lectures </li>
              <li>A choice of 1 workshop</li>
            </ul>
            <p className=" pddn-20-btm text-center"><a href="#tickets" className="btn btn-main-ghost">Book a Ticket</a></p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="white-bg">
            <div className="ribbon-wrapper-dark">
              <div className="ribbon-dark">Early Bird</div>
            </div>
            <h3 className="text-uppercase text-center pddn-20-top pddn-10-btm">Tech Pass</h3>
            <div className="accent-bg pddn-20-top-btm text-center">
              <p className="price">$<span className="text-bigger">545</span></p>
            </div>
            <ul className="list-pricing">
              <li>Attend the tech show </li>
              <li>Access to all lectures </li>
              <li>A choice of 3 workshop</li>
            </ul>
            <p className=" pddn-20-btm text-center"><a href="#tickets" className="btn btn-main-ghost">Book a Ticket</a></p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="white-bg">
            <div className="ribbon-wrapper-dark">
              <div className="ribbon-dark">Early Bird</div>
            </div>
            <h3 className="text-uppercase text-center pddn-20-top pddn-10-btm">Ultimate Pass</h3>
            <div className="accent-bg pddn-20-top-btm text-center">
              <p className="price">$<span className="text-bigger">850</span></p>
            </div>
            <ul className="list-pricing">
              <li>Attend both shows </li>
              <li>Access to all lectures </li>
              <li>Access to all workshops</li>
            </ul>
            <p className=" pddn-20-btm text-center"><a href="#tickets" className="btn btn-main-ghost">Book a Ticket</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
