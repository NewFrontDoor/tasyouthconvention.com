import React from 'react';
import logo from './inner-logo-white.png';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
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
            <Scroll.Link activeClass="active" to="speakers" spy={true} smooth={true} offset={-50} duration={500}>Speakers</Scroll.Link>
          </li>
          <NavItem eventKey={1} href="#speakers">Speakers</NavItem>
          <NavItem eventKey={2} href="#highlight">Highlights</NavItem>
          <NavItem eventKey={3} href="#schedule">Schedule</NavItem>
          <NavItem eventKey={4} href="#pricing">Pricing</NavItem>
          <NavItem eventKey={5} href="#location">Location</NavItem>
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
