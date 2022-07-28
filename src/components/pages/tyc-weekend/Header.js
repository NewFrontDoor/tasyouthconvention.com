import React from "react";
import tycsplash from "../../../images/TYC Roadshow_Background.png";

export default () => (
	<header className="fullwidth homepage" style={{ backgroundImage: `url('${tycsplash}')` }}>
		<div className="header-text white text-center text-uppercase">
			<h1 className="titlebg pddn-20-top pddn-20-btm">TYC Weekend 2022</h1>
			<h2>Behold</h2>
			<h2> </h2>
			<h3 className="mrgn-50-top white sm-title">
				<span className="date">
					14th-16th October
					<br />
					Bicheno, Tasmania
				</span>
			</h3>
		</div>
		<div className="arrow text-center">
			{" "}
			<i className="fa fa-angle-down fa-4x"></i>{" "}
		</div>
	</header>
);
