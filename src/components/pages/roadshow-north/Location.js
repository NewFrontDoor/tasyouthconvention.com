/* global google */
import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import marker_url from '../../../images/icons/marker.png';


/*Aiden's hall
var $latitude = -41.438951,
	$longitude = 147.153126;*/

//St Johns Anglican Church, 157 St John St
var $latitude = -41.4399866,
	$longitude = 147.1393178;

var $main_color = '#000000',
	$saturation = -100,
	$brightness = 10;

var mapStyle = [
	{
		elementType: "labels",
		stylers: [
			{ saturation: $saturation }
		]
	},
	{
		featureType: "poi",
		elementType: "labels",
		stylers: [
			{ visibility: "off" }
		]
	},
	{
		//don't show highways lables on the map
		featureType: 'road.highway',
		elementType: 'labels',
		stylers: [
			{ visibility: "off" }
		]
	},
	{
		//don't show local road lables on the map
		featureType: "road.local",
		elementType: "labels.icon",
		stylers: [
			{ visibility: "off" }
		]
	},
	{
		//don't show arterial road lables on the map
		featureType: "road.arterial",
		elementType: "labels.icon",
		stylers: [
			{ visibility: "off" }
		]
	},
	{
		//don't show road lables on the map
		featureType: "road",
		elementType: "geometry.stroke",
		stylers: [
			{ visibility: "off" }
		]
	},
	//style different elements on the map
	{
		featureType: "transit",
		elementType: "geometry.fill",
		stylers: [
			{ hue: $main_color },
			{ visibility: "on" },
			{ lightness: $brightness },
			{ saturation: $saturation }
		]
	},
	{
		featureType: "poi",
		elementType: "geometry.fill",
		stylers: [
			{ hue: $main_color },
			{ visibility: "on" },
			{ lightness: $brightness },
			{ saturation: $saturation }
		]
	},
	{
		featureType: "poi.government",
		elementType: "geometry.fill",
		stylers: [
			{ hue: $main_color },
			{ visibility: "on" },
			{ lightness: $brightness },
			{ saturation: $saturation }
		]
	},
	{
		featureType: "poi.sport_complex",
		elementType: "geometry.fill",
		stylers: [
			{ hue: $main_color },
			{ visibility: "on" },
			{ lightness: $brightness },
			{ saturation: $saturation }
		]
	},
	{
		featureType: "poi.attraction",
		elementType: "geometry.fill",
		stylers: [
			{ hue: $main_color },
			{ visibility: "on" },
			{ lightness: $brightness },
			{ saturation: $saturation }
		]
	},
	{
		featureType: "poi.business",
		elementType: "geometry.fill",
		stylers: [
			{ hue: $main_color },
			{ visibility: "on" },
			{ lightness: $brightness },
			{ saturation: $saturation }
		]
	},
	{
		featureType: "transit",
		elementType: "geometry.fill",
		stylers: [
			{ hue: $main_color },
			{ visibility: "on" },
			{ lightness: $brightness },
			{ saturation: $saturation }
		]
	},
	{
		featureType: "transit.station",
		elementType: "geometry.fill",
		stylers: [
			{ hue: $main_color },
			{ visibility: "on" },
			{ lightness: $brightness },
			{ saturation: $saturation }
		]
	},
	{
		featureType: "landscape",
		stylers: [
			{ hue: $main_color },
			{ visibility: "on" },
			{ lightness: $brightness },
			{ saturation: $saturation }
		]

	},
	{
		featureType: "road",
		elementType: "geometry.fill",
		stylers: [
			{ hue: $main_color },
			{ visibility: "on" },
			{ lightness: $brightness },
			{ saturation: $saturation }
		]
	},
	{
		featureType: "road.highway",
		elementType: "geometry.fill",
		stylers: [
			{ hue: $main_color },
			{ visibility: "on" },
			{ lightness: $brightness },
			{ saturation: $saturation }
		]
	},
	{
		featureType: "water",
		elementType: "geometry",
		stylers: [
			{ hue: $main_color },
			{ visibility: "on" },
			{ lightness: $brightness },
			{ saturation: $saturation }
		]
	}
];

const marker = {
	position: {
		lat: $latitude,
		lng: $longitude
	},
	visible: true,
	icon: marker_url,
	key: 'TYC',
	defaultAnimation: 2
};

const StyledGoogleMap = withGoogleMap(props => ( //eslint-disable-line
	<GoogleMap
		defaultZoom={14}
		defaultCenter={props.center}
		defaultOptions={{
			styles: mapStyle,
			panControl: false,
			zoomControl: false,
			mapTypeControl: false,
			streetViewControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false
		}}
	>
		<Marker {...marker} />
	</GoogleMap>
));

export default () => (
	<section id="location">
		<div id="contact-email">
			<a href="mailto:tasyouthcon@gmail.com">tasyouthcon@gmail.com</a>
		</div>
		<StyledGoogleMap
			containerElement={
				<div id="google-container"></div>
			}
			mapElement={
				<div style={{ height: `100%` }} />
			}
			center={new google.maps.LatLng($latitude, $longitude)}
		/>
		<address>
			157 St John Street, Launceston
		</address>
	</section>
)