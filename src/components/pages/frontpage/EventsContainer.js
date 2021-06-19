import React from 'react';
import { Link } from 'react-router-dom';
import EventItem from './models/event'
import tycsplash from './Background.jpg';

export default () => (
  <div id="events" className="homepage" style={{ 'backgroundImage': `url('${tycsplash}')`, fontFamily: 'Ubuntu Condensed, sans-serif' }}>
    <div className="header-text text-center">
      <h1 className="pddn-50-top pddn-30-btm white" style={{marginTop: '0px'}}>Annual TYC Events</h1>
      <div id="events" className="row">
        <EventItem title='Roadshow South' path='#roadshow-south' date="Date TBA" location="Hobart" registrationsOpen={false}  />
        <EventItem title='Roadshow North' path='#roadshow-north' date="Date TBA" location="Launceston" registrationsOpen={false}  />
        <EventItem title='TYLT' path='tylt' date="19th June 2021" location="Campbell Town" registrationsOpen={false}  />
        <EventItem title='TYC Weekend' path='tyc-weekend' date="8th-10th October 2021" location="Bicheno" registrationsOpen={true}  />  
      </div>
      </div>
    <div className="arrow text-center"> <i className="fa fa-angle-down fa-4x"></i> </div>
  </div>
)