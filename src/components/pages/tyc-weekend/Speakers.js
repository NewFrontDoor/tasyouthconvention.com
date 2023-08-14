import React from "react";
import speaker1 from "./speakers/Peter.png";

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
										Hey TYC! So keen to be with you guys in October. Any of you guys love music? For me, it's a gateway
										to my soul. I'm really looking forward to opening up some of the most beautiful songs in the world
										with you. I'm too old to be cool anymore, but still young enough that my kids Fyody, Rafael and
										Elena don't realise yet. So keep that one to yourself. I love playing soccer, guitar and gaming but
										mostly, I love it when I get to be with an honest person. Grab me for a chat.
									</p>
								</figcaption>
							</figure>
							<figure className="showForSM">
								<img src={speaker1} width="300" height="300" alt="Speaker" className="img-responsive center-block" />
								<figcaption></figcaption>
							</figure>
							<p>
								<span className="speaker-accent">Peter Kutuzov</span>
								<br />
								{/* Position,{" "}
								<a className="redLink" href="" target="_blank" rel="noreferrer noopener">
									Link
								</a> */}
							</p>
							<p className="showForSM">
								Hey TYC! So keen to be with you guys in October. Any of you guys love music? For me, it's a gateway to
								my soul. I'm really looking forward to opening up some of the most beautiful songs in the world with
								you. I'm too old to be cool anymore, but still young enough that my kids Fyody, Rafael and Elena don't
								realise yet. So keep that one to yourself. I love playing soccer, guitar and gaming but mostly, I love
								it when I get to be with an honest person. Grab me for a chat.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);
