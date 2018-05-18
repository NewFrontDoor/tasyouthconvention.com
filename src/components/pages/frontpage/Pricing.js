import React from 'react';
import { Link } from 'react-router-dom';
import splash2 from './website1.jpg';

export default ({ loading, registrationsOpen, registrationStartDate, isEarlyBird, currentPrice, leaderPrice }) => (
  <section id="pricing" style={{'backgroundImage': `url('${splash2}')`}}>
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
            {isEarlyBird &&
              <div className="ribbon-wrapper-dark">
                <div className="ribbon-dark">Early Bird</div>
              </div>
            }
            <h3 className="text-uppercase text-center pddn-20-top pddn-10-btm">Register for TYC</h3>
            <div className="accent-bg pddn-20-top-btm text-center">
              <p className="price">$<span className="text-bigger">{loading ? <i className="fa fa-spinner"></i> : currentPrice}</span></p>
            </div>
            <ul className="list-pricing">
              <li>Register here to book and pay</li>
              <li>for TYC once your youth group</li>
              <li>has registered</li>
            </ul>
            <p className="pddn-20-btm text-center"><Link to="/register" className="btn btn-main-ghost">Register for TYC</Link></p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="white-bg">
            {isEarlyBird &&
              <div className="ribbon-wrapper-dark">
                <div className="ribbon-dark">Early Bird</div>
              </div>
            }
            <h3 className="text-uppercase text-center pddn-20-top pddn-10-btm">Register Your Group</h3>
            <div className="accent-bg pddn-20-top-btm text-center">
              <p className="price">$<span className="text-bigger">{loading ? <i className="fa fa-spinner"></i> : leaderPrice}</span></p>
            </div>
            <ul className="list-pricing">
              <li>If you are a youth leader </li>
              <li>Register here.  This will also register your </li>
              <li>Youth Group if they're not already registered</li>
            </ul>
            <p className=" pddn-20-btm text-center"><Link to="/register-group" className="btn btn-main-ghost">Register As a Leader</Link></p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
