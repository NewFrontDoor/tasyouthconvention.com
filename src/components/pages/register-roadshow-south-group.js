import React from 'react';

import RegistrationSection from './registration/group-registration-roadshow-south';
import PaymentSection from './registration/payment-section';
import SuccessSection from './registration/success-section';

import LoadingMessage from '../messages/LoadingMessage';
import ErrorMessage from '../messages/ErrorMessage';

export default ({ registrationState: { stage, errorDetails }, submitRegistration, submitPayment, resetRegistration, loadingEventDetails, eventDetails, registrationsOpen, currentPrice, registeredGroups }) => {
  return (
    <section className="container">
      <h3>Register as a youth group leader for TYC Roadshow South</h3>
      {loadingEventDetails === true ?
        <LoadingMessage>Loading details of this event. This won't take long.</LoadingMessage>
        : (registrationsOpen === true ?
          <div>
            <RegistrationSection show={stage === 'registration'} currentPrice={currentPrice} submitRegistration={submitRegistration} registeredGroups={registeredGroups} />
            <PaymentSection show={stage === 'payment'} currentPrice={currentPrice} submitPayment={submitPayment} />
            <SuccessSection show={stage === 'finished'} isGroupRegistration={true} resetRegistration={resetRegistration} />
            <ErrorMessage show={stage === 'error'}>There was an error saving your registration...</ErrorMessage>
            <LoadingMessage show={stage === 'savingRegistration'}>Saving your registration details...</LoadingMessage>
            <LoadingMessage show={stage === 'savingPayment'}>Saving your payment details.  Please wait for confirmation before leaving this page.</LoadingMessage>
          </div> :
          <div className="alert alert-warning">
            Registrations for Roadshow South are not currently open. These will open on {eventDetails.registrationStartDate ? eventDetails.registrationStartDate.format('DD/MM/YYYY') : ''}.
          </div>
        )
      }
    </section>
  );
}
