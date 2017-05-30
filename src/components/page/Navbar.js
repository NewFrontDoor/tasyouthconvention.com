import React from 'react';
import logo from '../../images/logo/tyc-white.png';
import { Navbar, Nav } from 'react-bootstrap';
import Scroll from 'react-scroll';

export default () => (
    <Navbar collapseOnSelect fixedTop id="darknav">
      <Navbar.Header>
        <Navbar.Toggle>
        </Navbar.Toggle>
        <Navbar.Brand>
          <a href="/"><img src={logo} className="img-responsive" alt="New York Web Buzz" width="65" height="37" /></a>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <li role="presentation">
            <Scroll.Link activeClass="active" to="highlight" spy={true} smooth={true} offset={-50} duration={500}>Highlights</Scroll.Link>
          </li>
          <li role="presentation">
            <Scroll.Link activeClass="active" to="speakers" spy={true} smooth={true} offset={-50} duration={500}>Speakers</Scroll.Link>
          </li>
          <li role="presentation">
            <Scroll.Link activeClass="active" to="pricing" spy={true} smooth={true} offset={-50} duration={500}>Registration</Scroll.Link>
          </li>
          <li role="presentation">
            <Scroll.Link activeClass="active" to="location" spy={true} smooth={true} offset={-50} duration={500}>Location</Scroll.Link>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)

/*
<nav id="darknav" className="navbar navbar-default navbar-fixed-top">
<div className="container">
  <div className="navbar-header page-scroll">
    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span className="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
    <a className="navbar-brand" href="/"><img src={logo} class="img-responsive" alt="New York Web Buzz" width="65" height="37" /></a>
  </div>
  <div id="navbar" className="collapse navbar-collapse">
    <ul className="nav navbar-nav navbar-right">
      <li><a class="page-scroll" href="#speakers">Speakers</a></li>
      <li><a class="page-scroll" href="#highlight">Highlights</a></li>
      <li><a class="page-scroll" href="#schedule">Schedule</a></li>
      <li><a class="page-scroll" href="#pricing">Tickets</a></li>
      <li><a class="page-scroll" href="#sponsors">Sponsors</a></li>
      <li><a class="page-scroll" href="#location">Location</a></li>
    </ul>
  </div>
</div>
</nav>
*/
