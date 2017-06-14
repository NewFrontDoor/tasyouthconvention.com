import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';
import accounting from 'accounting';

import PaypalCheckout from '../PaypalCheckout';

import ENV from '../../config/environment';

const PayPalButton = paypal.Button.driver('react', { React, ReactDOM });


const paymentDetails = (price) => (data, actions) => {
  return actions.payment.create({
    transactions: [
      { amount: { total: price, currency: 'AUD' } }
    ]
  })
};

const authorizePayment = (onAuthorised) => (data, actions) => {
  return actions.payment.execute().then(function() {
    if (onAuthorised !== undefined) {
      onAuthorised(data);
    }
  });
};

export default ({ paymentAuthorised, price }) => {
  console.log('price is ', price);
  return (
    <div>
      <h3>Make a Payment to TYC</h3>
      <p>To pay your registration amount of {accounting.formatMoney(price)}, please click the Paypal button below.  After you have entered your paypal information, please leave the window open until confirmation has been received.</p>
      <PaypalCheckout
          env='sandbox'
          paymentAuthorised={paymentAuthorised}
          price={price} />
    </div>
  )
}
