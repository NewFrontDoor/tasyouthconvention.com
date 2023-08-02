import React from "react";
import { Link } from "react-router-dom";

const renderMoreInfo = (path) => {
	if (path.startsWith("http")) {
		return (
			<a href={`${path}`} className="btn btn-main-ghost" target="_blank" rel="noopener noreferrer">
				More Info
			</a>
		);
	}
	return (
		<Link to={`/${path}`} className="btn btn-main-ghost">
			More Info
		</Link>
	);
};

export default ({ title, path, registrationsOpen, date, location, showMoreInfo }) => (
	<div className="col-sm-3 col-xs-8 event">
		<div style={{ backgroundColor: `${registrationsOpen ? "#fff" : "rgba(20,20,20, 0.92"}` }}>
			<h3
				className={`text-center pddn-20-top pddn-10-btm`}
				style={{ color: `${registrationsOpen ? "#333" : "#737373"}` }}
			>
				Registrations {registrationsOpen ? "Open" : "Closed"}
			</h3>
			<div className="accent-bg pddn-20-top-btm text-center">
				<p className="price">
					<span className="text-bigger">{title}</span>
				</p>
			</div>
			<ul className="list-pricing" style={{ color: `${registrationsOpen ? "#333" : "#929292"}` }}>
				<li>{date}</li>
				<li>{location}</li>
			</ul>
			<p className=" pddn-20-btm text-center">{showMoreInfo && renderMoreInfo(path)}</p>
		</div>
	</div>
);
