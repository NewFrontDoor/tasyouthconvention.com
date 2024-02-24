import React from "react";
import tycsplash from "../../../images/backgrounds/TYC 2022 Background.png";

export default () => (
	<header className="fullwidth homepage" style={{ backgroundImage: `url('${tycsplash}')` }}>
		<div className="header-text white text-center">
			<h1 className="titlebg pddn-20-top pddn-20-btm text-uppercase">Roadshow North</h1>
			<h2>The Cross</h2>
			<h2> </h2>
			<h3 className="mrgn-50-top white text-uppercase">
				<span className="date">
					15th March 2024
					<br />
					<br />
					Door of Hope
					<br />
					50 Glen Dhu Street, Launceston
					<br />
					<br />7 - 9 PM (doors open 6:30)
				</span>
			</h3>
			<h3 className="mrgn-50-top white">
				<span className="header-subtext">
					Roadshow North is an event for teens in or around Launceston. Expect games, snacks, friends and a great time.
					Most of all expect to be challenged to think about Jesus and the reason He died on a cross.
				</span>
			</h3>
		</div>
		<div className="arrow text-center">
			{" "}
			<i className="fa fa-angle-down fa-4x"></i>{" "}
		</div>
	</header>
);
