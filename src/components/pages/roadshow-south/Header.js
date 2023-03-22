import React from "react";
import tycsplash from "../../../images/backgrounds/TYC 2022 Background.png";

export default () => (
	<header className="fullwidth homepage" style={{ backgroundImage: `url('${tycsplash}')` }}>
		<div className="header-text white text-center">
			<h1 className="titlebg pddn-20-top pddn-20-btm text-uppercase">Roadshow South</h1>
			{/*<h2>Dead or Alive</h2>*/}
			<h2> </h2>
			<h3 className="mrgn-50-top white text-uppercase">
				<span className="date">
					31st March 2023
					<br />
					St Clements
					<br />
					100 Beach Road, Kingston
					<br />7 - 9 PM
				</span>
			</h3>
			{/*<h3 className="mrgn-50-top white"><span className="header-subtext"></span></h3> */}
		</div>
		<div className="arrow text-center">
			{" "}
			<i className="fa fa-angle-down fa-4x"></i>{" "}
		</div>
	</header>
);
