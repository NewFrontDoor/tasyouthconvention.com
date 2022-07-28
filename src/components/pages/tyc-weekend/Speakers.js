import React from "react";
import speaker1 from "./speakers/Jordan.png";

export default () => (
	<section id="speakers">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-title">
						<h2 className="text-center">
							<span>Speakers</span>
						</h2>
						<p className="subtitle text-center">Come and meet our TYC speaker for this year!</p>
						<p className="subtitle text-center">
							<i className="fa fa-angle-down fa-lg"></i>
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-12">
					<div className="col-sm-3"></div>
					<div className="col-sm-6 text-center">
						<div className="speaker-item">
							<figure className="speaker accent-bg hideForSM">
								<img src={speaker1} width="300" height="300" alt="Speaker" className="img-responsive center-block" />
								<figcaption>
									<p>
										Hey I'm Jordan! I'm a Youth Pastor up at EV Church on the Central Coast of NSW. I love drinking
										coffee, playing music, watching pretty much any sport, and hanging out with my wife, Lauren, and
										little dude, Percy. But most of all I love getting to chat with people about Jesus and dig into the
										Bible. What he brings changes lives, offers real forgiveness and a sure hope of heaven forever - and
										I reckon that's worth talking about!
									</p>
								</figcaption>
							</figure>
							<figure className="showForSM">
								<img src={speaker1} width="300" height="300" alt="Speaker" className="img-responsive center-block" />
								<figcaption></figcaption>
							</figure>
							<p>
								<span className="speaker-accent">Jordan Francis</span>
								<br />
								Youth Pastor,{" "}
								<a className="redLink" href="https://evchurch.info" target="_blank" rel="noreferrer noopener">
									EV Church
								</a>
							</p>
							<p className="showForSM">
								Hey I'm Jordan! I'm a Youth Pastor up at EV Church on the Central Coast of NSW. I love drinking coffee,
								playing music, watching pretty much any sport, and hanging out with my wife, Lauren, and little dude,
								Percy. But most of all I love getting to chat with people about Jesus and dig into the Bible. What he
								brings changes lives, offers real forgiveness and a sure hope of heaven forever - and I reckon that's
								worth talking about!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);
