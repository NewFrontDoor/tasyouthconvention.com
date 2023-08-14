import React from "react";
import splash2 from "../../../images/Background.jpg";

export default ({ loading, registrationsOpen, registrationStartDate, isEarlyBird, currentPrice, leaderPrice }) => (
	<section id="pricing" style={{ backgroundImage: `url('${splash2}')` }}>
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-title-white">
						<h2 className="text-center">
							<span>Registration</span>
						</h2>
						<p className="subtitle white text-center">Register here for TYC Weekend</p>
						<p className="subtitle text-center">
							<i className="fa fa-angle-down fa-lg white"></i>
						</p>
					</div>
				</div>
			</div>

			<div className="row" style={{display: "flex",margin: "0 auto"}}>
				<div className="col-sm-3"></div>
				<div className="col-xs-12 col-sm-6">
					<div className="white-bg">
						<h3 className="text-uppercase text-center pddn-20-top pddn-10-btm">Register Your Group</h3>
						<div className="accent-bg text-center">
							<p className="priceNoCircle"></p>
						</div>
						<p className="text-center pddn-30">
							<strong>Note</strong> this year we will not be registering individual students but only group regos.
						</p>
						<p className="text-center pddn-10-btm" style={{paddingLeft: '10px', paddingRight: '10px'}}>
							You can find out more here...
						</p>
						<p className=" pddn-20-btm text-center">
							<a href="https://form.jotform.com/231877550172863" target="_blank" rel="noopener noreferrer" className="btn btn-main-ghost">
								Register Your Group
							</a>
						</p>
					</div>
				</div>
				<div className="col-sm-3"></div>
			</div>
		</div>
	</section>
);
