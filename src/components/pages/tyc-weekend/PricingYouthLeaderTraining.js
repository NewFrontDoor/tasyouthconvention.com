import React from 'react';
import { Link } from 'react-router-dom';
import splash2 from './Background.jpg';

export default ({ loading, registrationsOpen, registrationStartDate, isEarlyBird, currentPrice, leaderPrice }) => (
  <section id="pricing" style={{ 'backgroundImage': `url('${splash2}')` }}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title-white">
            <h2 className="text-center"><span>Registration</span></h2>
            <p className="subtitle white text-center">Register here for the Tas Youth Leader Training</p>
            <p className="subtitle text-center"><i className="fa fa-angle-down fa-lg white"></i></p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="white-bg">
            {isEarlyBird &&
              <div className="ribbon-wrapper-dark">
                <div className="ribbon-dark">Early Bird</div>
              </div>
            }
            <h3 className="text-uppercase text-center pddn-20-top pddn-10-btm">Register for Tas Youth Leader Training</h3>
            <div className="accent-bg pddn-20-top-btm text-center">
              <p className="price">$<span className="text-bigger">{loading ? <i className="fa fa-spinner"></i> : currentPrice}</span></p>
            </div>
            <ul className="list-pricing">
              <li>Register here to book and pay</li>
              <li>for Tas Youth Leader Training</li>
            </ul>
            <p className="pddn-20-btm text-center"><Link to="/register-tylt" className="btn btn-main-ghost">Register for Tas Youth Leader Training</Link></p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
