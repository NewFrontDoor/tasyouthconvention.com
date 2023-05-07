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
					date="24th March 2023"
					location="Launceston"
					registrationsOpen={true}
					showMoreInfo={true}
				/>
				<EventItem
					title="Roadshow South"
					path="roadshow-south"
					date="31st March 2023"
					location="Hobart"
					registrationsOpen={true}
					showMoreInfo={true}
				/>
				<EventItem
					title="TYLT"
					path="tylt"
					date="17th June 2023"
					location="Launceston"
					registrationsOpen={true}
					showMoreInfo={true}
				/>
				<EventItem
					title="TYC Weekend"
					path="tyc-weekend"
					date="October 2023 (Dates TBA)"
					location="Bicheno"
					registrationsOpen={false}
					showMoreInfo={false}
				/>
			</div>
		</div>
		<div className="arrow text-center">
			{" "}
			<i className="fa fa-angle-down fa-4x"></i>{" "}
		</div>
	</div>
);
