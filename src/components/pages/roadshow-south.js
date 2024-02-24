import React from "react";
import Location from "./roadshow-south/Location";
//import PricingContainerRoadshowSouth from "../../containers/PricingContainerRoadshowSouth";
import PricingContainerRoadshowSouthSingleRegister from "../pages/roadshow-south/PricingRoadshowSouthSingleRegister";

export default () => (
	<div id="front-page-container">
		{/* <PricingContainerRoadshowSouth /> */}
		<PricingContainerRoadshowSouthSingleRegister />
		<Location />
	</div>
);
