/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Scroll from 'react-scroll';
import { Link } from 'react-router-dom';

const Footer = ({isFrontPage}) => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-9 col-lg-9">
          <ul className="list-inline">
            <li>
              {isFrontPage ?
                <Scroll.Link activeClass="active" to="event-features" spy={true} smooth={true} offset={-50} duration={500}>Highlights</Scroll.Link> :
                <Link to="/#event-features">Highlights</Link>
              }
            </li>
            <li>
              {isFrontPage ?
                <Scroll.Link activeClass="active" to="speakers" spy={true} smooth={true} offset={-50} duration={500}>Speakers</Scroll.Link> :
                <Link to="/#speakers">Speakers</Link>
              }
            </li>
            <li>
              {isFrontPage ?
                <Scroll.Link activeClass="active" to="pricing" spy={true} smooth={true} offset={-50} duration={500}>Register</Scroll.Link> :
                <Link to="/#pricing">Register</Link>
              }
            </li>
            <li>
              {isFrontPage ?
                <Scroll.Link activeClass="active" to="location" spy={true} smooth={true} offset={-50} duration={500}>Location</Scroll.Link> :
                <Link to="/#location">Location</Link>
              }
            </li>
          </ul>
          <p className="copyright">Copyright <i className="fa fa-copyright"></i> 2017 - Tasmanian Youth Convention</p>
          <p className="copyright">Website by <a href="https://vision100it.org/">Vision 100 IT</a></p>
        </div>
        <div className="col-sm-4 col-md-3 col-lg-3">
          <ul className="list-inline social-buttons">
            <li> <a className="fa fa-twitter fa-lg" href="https://www.facebook.com/designify.me"></a> </li>
            <li> <a className="fa fa-facebook fa-lg" href="https://www.facebook.com/designify.me"></a> </li>
            <li> <a className="fa fa-linkedin fa-lg" href="https://www.facebook.com/designify.me"></a> </li>
            <li> <a className="fa fa-google-plus fa-lg" href="https://www.facebook.com/designify.me"></a> </li>
            <li> <a className="fa fa-pinterest-p fa-lg" href="https://www.facebook.com/designify.me"></a> </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export const FrontPageFooter = () => (
  <Footer isFrontPage={true} />
)

export const OtherPageFooter = () => (
  <Footer isFrontPage={false} />
)
/* eslint-enable jsx-a11y/anchor-has-content */
