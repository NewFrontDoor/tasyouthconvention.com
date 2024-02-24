import React from "react";
// import { Link } from "react-router-dom";
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
						<p className="subtitle white text-center">Register here for Roadshow North</p>
						<p className="subtitle text-center">
							<i className="fa fa-angle-down fa-lg white"></i>
						</p>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-sm-3 hideForMobile"></div>
				<div className="col-sm-6">
					<div className="white-bg">
						<h3 className="text-uppercase text-center pddn-20-top pddn-10-btm">Register for Roadshow North</h3>
						<div className="accent-bg pddn-20-top-btm text-center">
							{/* <p className="price">
								$<span className="text-bigger">{loading ? <i className="fa fa-spinner"></i> : currentPrice}</span>
							</p> */}
						</div>
						<ul className="list-pricing">
							<li>Register here to book and pay</li>
							<li>for Roadshow North</li>
							<li>&nbsp;</li>
						</ul>
						<p className="pddn-20-btm text-center">
							<a href="https://form.jotform.com/240438479369874" className="btn btn-main-ghost">
								Register for Roadshow North
							</a>
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-3 hideForMobile"></div>
				<div className="col-sm-6">
					<div className="white-bg">
						<h3 className="text-uppercase text-center pddn-20-top pddn-10-btm">Register Your Group</h3>
						<ul className="list-pricing">
							<li>If you are coming and want to register</li>
							<li>your whole group and pay on the night</li>
							<li>Please email us with rough numbers:</li>
						</ul>
						<p className=" pddn-20-btm text-center">
							<a href="mailto:tasyouthcon@gmail.com">tasyouthcon@gmail.com</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);
