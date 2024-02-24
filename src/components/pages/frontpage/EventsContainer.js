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
					maxExtraLinks={2}
					extraLinks={[{ link: "https://form.jotform.com/240438479369874", displayText: "Register here" }]}
				/>
				<EventItem
					title="Roadshow South"
					path="roadshow-south"
					date="22nd March 2024"
					location="Hobart"
					registrationsOpen={true}
					showMoreInfo={true}
					maxExtraLinks={2}
					extraLinks={[{ link: "https://form.jotform.com/240438479369874", displayText: "Register here" }]}
				/>
				<EventItem
					title="TYLT"
					path="tylt"
					date="17th June 2023"
					location="Launceston"
					registrationsOpen={false}
					showMoreInfo={true}
					maxExtraLinks={2}
				/>
				<EventItem
					title="TYC Weekend"
					// path="tyc-weekend"
					path="tyc-weekend"
					date="October 2023"
					location="Bicheno"
					registrationsOpen={false}
					showMoreInfo={true}
					extraLinks={[
						{ link: "https://form.jotform.com/231877550172863", displayText: "Sign your group up now" },
						{ link: "https://form.jotform.com/232411548086859", displayText: "TYC Merch" }
					]}
					maxExtraLinks={2}
				/>
			</div>
		</div>
		<div className="arrow text-center">
			{" "}
			<i className="fa fa-angle-down fa-4x"></i>{" "}
		</div>
	</div>
);
