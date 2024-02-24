import React from "react";
import tycsplash from "../../../images/backgrounds/TYC 2022 Background.png";

export default () => (
	<header className="fullwidth homepage" style={{ backgroundImage: `url('${tycsplash}')` }}>
		<div className="header-text white text-center">
			<h1 className="titlebg pddn-20-top pddn-20-btm text-uppercase">Roadshow South</h1>
			<h2>The Cross</h2>
			<h2> </h2>
			<h3 className="mrgn-50-top white text-uppercase">
				<span className="date">
					22nd March 2024
					<br />
					<br />
					C3 Convention Centre
					<br />
					64 Anglesea St, Hobart
					<br />
					<br />7 - 9 PM (doors open 6:30)
				</span>
			</h3>
			<h3 className="mrgn-50-top white">
				<span className="header-subtext">
					Roadshow South is an event for teens in or around Hobart. Expect games, snacks, friends and a great time. Most
					of all expect to be challenged to think about Jesus and the reason He died on a cross.
				</span>
			</h3>
		</div>
		<div className="arrow text-center">
			{" "}
			<i className="fa fa-angle-down fa-4x"></i>{" "}
		</div>
	</header>
);
