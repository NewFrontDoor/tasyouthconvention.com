import React from "react";
import tycsplash from "../../../images/backgrounds/TYC 2022 Background.png";

export default () => (
	<header className="fullwidth homepage" style={{ backgroundImage: `url('${tycsplash}')` }}>
		<div className="header-text white text-center">
			<h1 className="titlebg pddn-20-top pddn-20-btm text-uppercase">Tas Youth Leader Training</h1>
			<h2>Who are we? Identity and Belonging</h2>
			<h2> </h2>
			<h3 className="mrgn-50-top white text-uppercase">
				<span className="date">
					17th June
					<br />
					Riverbank Christian Church, Launceston
					<br />
					10AM – 5PM
					<br />
					$25 - INCLUDES MORNING + AFTERNOON TEA AND LUNCH
				</span>
			</h3>
			<h3 className="mrgn-50-top white">
				<span className="header-subtext">
					As a TYC team we value the contribution youth leaders in Tasmania make to the lives of the youth in our state,
					and that is why we've organised our Tasmanian Youth Leader Training (TYLT) event. This conference will include
					a sermon and workshop by our guest speaker Graham Poole, plus multiple electives, singing and discussions,
					with the entire day focused on the theme of discipleship.
				</span>
			</h3>
			{/*<div className="event-locations">
      <h3 className="white sm-title">
        <span className="date">26<sup>th</sup> March 7pm - 930pm<br/><br/>
        <a href="https://crckingston.org.au">CRCK</a><br/><br/>
        <a href="https://goo.gl/maps/hmvS9rptkQQwU89m7"><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;17 Denison St, Kingston</a></span>
      </h3>
      <h3 className="white sm-title">
        <span className="date">27<sup>th</sup> March 7pm - 930pm<br/><br/>
        <a href="https://riverbankcc.org.au/">Riverbank</a><br/><br/>
        <a href="https://goo.gl/maps/PnmAWPay8pFGSAgc7"><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;27 Riverbank Place, Riverside</a></span>
      </h3>
    </div>*/}
		</div>
		<div className="arrow text-center">
			{" "}
			<i className="fa fa-angle-down fa-4x"></i>{" "}
		</div>
	</header>
);
