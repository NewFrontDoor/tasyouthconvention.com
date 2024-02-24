import React from "react";
import Location from "./roadshow-north/Location";
// import PricingContainerRoadshowNorth from '../../containers/PricingContainerRoadshowNorth';
import PricingContainerRoadshowNorthSingleRegister from "../pages/roadshow-north/PricingRoadshowNorthSingleRegister";

export default () => (
	<div id="front-page-container">
		{/* <PricingContainerRoadshowNorth /> */}
		<PricingContainerRoadshowNorthSingleRegister />
		<Location />
	</div>
);
