import React from "react";
import { Link } from "react-router-dom";

const renderMoreInfo = (path) => {
	if(path){
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
	}
};

const renderExtraLinkPath = (path, displayText) => {
	if(path && displayText){
		if (path.startsWith("http")) {
			return (
				<a href={`${path}`} className="btn btn-main-ghost" target="_blank" rel="noopener noreferrer">
					{displayText}
				</a>
			);
		}
		return (
			<Link to={`/${path}`} className="btn btn-main-ghost">
				{displayText}
			</Link>
		);
	}
}

const renderPadding = (extraLinks, maxExtraLinks) => {
	if(extraLinks && extraLinks.length === maxExtraLinks)
	{
		console.log("rendering2")
		return; //no padding needed
	}
	else if(extraLinks && extraLinks.length > 0)
	{
		return extraLinks.map((link, idx)=><p key={`padding-${idx}`} style={{paddingBottom: "60px"}}></p>)
	}
	else
	{
		console.log("else")
		return <p key={`padding-extra`} style={{paddingBottom: `${60*maxExtraLinks}px`}}></p>
	}
}

export default ({ title, path, registrationsOpen, date, location, showMoreInfo, extraLinks, maxExtraLinks }) => (
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
			{extraLinks && extraLinks.length > 0 && extraLinks.map(extraLink => {
				return <p className=" pddn-20-btm text-center">{renderExtraLinkPath(extraLink.link, extraLink.displayText)}</p>
			})}
			{renderPadding(extraLinks, maxExtraLinks)}
		</div>
	</div>
);
