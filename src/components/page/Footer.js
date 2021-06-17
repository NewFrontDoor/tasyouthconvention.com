/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Scroll from 'react-scroll';
import { Link } from 'react-router-dom';

const Footer = ({ isFrontPage }) => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-9 col-lg-9">
          <ul className="list-inline">
            {/*<li>
              {isFrontPage ?
                <Scroll.Link className="redLink" activeClass="active" to="about-tyc" spy={true} smooth={true} offset={-50} duration={500}>What is TYC?</Scroll.Link> :
                <Link to="/#about-tyc">What Is TYC?</Link>
              }
            </li>
            <li>
              {isFrontPage ?
                <Scroll.Link className="redLink" activeClass="active" to="event-features" spy={true} smooth={true} offset={-50} duration={500}>Highlights</Scroll.Link> :
                <Link to="/#event-features">Highlights</Link>
              }
            </li>
            <li>
              {isFrontPage ?
                <Scroll.Link className="redLink" activeClass="active" to="speakers" spy={true} smooth={true} offset={-50} duration={500}>Speakers</Scroll.Link> :
                <Link to="/#speakers">Speakers</Link>
              }
            </li>*/}
            <li>
              {isFrontPage ?
                <Scroll.Link className="redLink" activeClass="active" to="about-tyc" spy={true} smooth={true} offset={-50} duration={500}>About</Scroll.Link> :
                <Link className="redLink" to="/#about-tyc">About</Link>
              }
            </li>
            <li>
              {isFrontPage ?
                <Scroll.Link className="redLink" activeClass="active" to="events" spy={true} smooth={true} offset={-50} duration={500}>Events</Scroll.Link> :
                <Link className="redLink" to="/#events">Events</Link>
              }
            </li>
            <li>
              <Link className="redLink" to="/FAQ">FAQ</Link>
            </li>
            <li>
              <Link className="redLink" to="/talks">Past Talks</Link>
            </li>
          </ul>
          <p className="copyright">Copyright <i className="fa fa-copyright"></i> 2021 - Tasmanian Youth Convention</p>
          <p className="copyright">Website by <a className="redLink" href="https://newfrontdoor.org/" target="_blank" rel="noreferrer noopener">New Front Door</a></p>
        </div>
        <div className="col-sm-4 col-md-3 col-lg-3">
          <ul className="list-inline social-buttons">
            <li> <a className="fa fa-facebook fa-lg" href="https://www.facebook.com/tasyouth/" target="_blank" rel="noreferrer noopener"></a> </li>
            <li> <a className="fa fa-instagram fa-lg" href="https://www.instagram.com/tasyouthcon/" target="_blank" rel="noreferrer noopener"></a> </li>
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
