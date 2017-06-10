import React from 'react';

import RegistrationSection from './groupregistration/registration-section';
import PaymentSection from './groupregistration/payment-section';
import SuccessSection from './groupregistration/success-section';

import accounting from 'accounting';

import LoadingMessage from '../messages/LoadingMessage';
import ErrorMessage from '../messages/ErrorMessage';

export default ({registrationState: {stage, errorDetails}, registrationDetails, submitRegistration, submitPayment, loadingEventDetails, eventDetails, registrationsOpen, currentPrice}) => {
  return (
    <section className="container">
      <h3>Register as a youth group leader for Tasmanian Youth Convention</h3>
      {loadingEventDetails === true ?
        <LoadingMessage>Loading details of this year's TYC event. Wont' be long</LoadingMessage>
        : (registrationsOpen === true ?
            <div>
              <RegistrationSection show={stage === 'registration'} registrationDetails={registrationDetails} submitRegistration={submitRegistration} />
              <PaymentSection show={stage === 'payment'} currentPrice={currentPrice} submitPayment={submitPayment} />
              <SuccessSection show={stage === 'finished'} />
              <ErrorMessage show={stage === 'error'}>There was an error saving your registration...</ErrorMessage>
              <LoadingMessage show={stage === 'savingRegistration'}>Saving your registration details...</LoadingMessage>
              <LoadingMessage show={stage === 'savingPayment'}>Saving your payment details.  Please wait for confirmation before leaving this page.</LoadingMessage>
            </div> :
          <div className="alert alert-warning">
            Registrations for TYC are not currently open. These will open on {eventDetails.registrationStartDate ? eventDetails.registrationStartDate.format('DD/MM/YYYY') : ''}.
          </div>
        )
      }
    </section>
  );
}
