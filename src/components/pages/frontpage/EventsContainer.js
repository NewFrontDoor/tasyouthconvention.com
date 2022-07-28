import React from "react";
//import { Link } from 'react-router-dom';
import EventItem from "./models/event";
import tycsplash from "../../../images/Background.jpg";

export default () => (
	<div
		id="events"
		className="homepage"
		style={{ backgroundImage: `url('${tycsplash}')`, fontFamily: "Ubuntu Condensed, sans-serif" }}
	>
		<div className="header-text text-center">
			<h1 className="pddn-50-top pddn-30-btm white" style={{ marginTop: "0px" }}>
				Annual TYC Events
			</h1>
			<div id="events" className="row">
				<EventItem
					title="Roadshow North"
					path="roadshow-north"
					date="1st April 2022"
					location="Launceston"
					registrationsOpen={false}
				/>
				<EventItem
					title="Roadshow South"
					path="roadshow-south"
					date="8th April 2022"
					location="Hobart"
					registrationsOpen={false}
				/>
				<EventItem title="TYLT" path="tylt" date="18th June 2022" location="Campbell Town" registrationsOpen={false} />
				<EventItem
					title="TYC Weekend"
					path="tyc-weekend"
					date="14th-16th October 2022"
					location="Bicheno"
					registrationsOpen={true}
				/>
			</div>
		</div>
		<div className="arrow text-center">
			{" "}
			<i className="fa fa-angle-down fa-4x"></i>{" "}
		</div>
	</div>
);
