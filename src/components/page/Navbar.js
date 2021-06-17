import React from 'react';
import logo from '../../images/logo/tyc-white.png';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';

const TycNav = ({ isFrontPage }) => (
  <Navbar collapseOnSelect fixedTop id="darknav">
    <Navbar.Header>
      <Navbar.Toggle>
      </Navbar.Toggle>
      <Navbar.Brand>
        <a href="/"><img src={logo} className="img-responsive" alt="Tasmanian Youth Convention" width="65" height="37" /></a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        {<li role="presentation">
          {isFrontPage ?
            <Scroll.Link activeClass="active" to="about-tyc" spy={true} smooth={true} offset={-50} duration={500}>About</Scroll.Link> :
            <Link to="/#about-tyc">About</Link>
          }
        </li>
        /*<li role="presentation">
          {isFrontPage ?
            <Scroll.Link activeClass="active" to="event-features" spy={true} smooth={true} offset={-50} duration={500}>Highlights</Scroll.Link> :
            <Link to="/#event-features">Highlights</Link>
          }
        </li>
        <li role="presentation">
          {isFrontPage ?
            <Scroll.Link activeClass="active" to="speakers" spy={true} smooth={true} offset={-50} duration={500}>Speakers</Scroll.Link> :
            <Link to="/#speakers">Speakers</Link>
          }
        </li>*/}
        <li role="presentation">
          {isFrontPage ?
            <Scroll.Link activeClass="active" to="events" spy={true} smooth={true} offset={-50} duration={500}>Events</Scroll.Link> :
            <Link to="/#events">Events</Link>
          }
        </li>
        <li role="presentation" className="hideForMobile">
          <Link to="" onClick={e => e.preventDefault()} className="hideForMobile">|</Link>
        </li>
        <li role="presentation">
          {
            <Link to="/FAQ">FAQ</Link>
          }
        </li>
        <li role="presentation">
          {
            <Link to="/Talks">Past Talks</Link>
          }
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export const FrontPageNavbar = () => (
  <TycNav isFrontPage={true} />
)

export const OtherPageNavbar = () => (
  <TycNav isFrontPage={false} />
)
