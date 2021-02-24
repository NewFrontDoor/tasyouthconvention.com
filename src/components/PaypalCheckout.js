import React from 'react';
import ReactDOM from 'react-dom';

import ENV from '../config/environment';
import paypal from 'paypal-checkout';

const PayPalButton = paypal.Button.driver('react', { React, ReactDOM });


export default class PaypalCheckout extends React.Component {
  onAuthorize(paymentAuthorised) {
    return (data, actions) => {
      return actions.payment.execute().then(function() {
        if (paymentAuthorised !== undefined) {
          paymentAuthorised(data);
        }
      });
    }
  }

  payment(price) {
    return () => {
      const env = ENV.paypal.environment;
      const client = ENV.paypal.clientId;

      return paypal.rest.payment.create(env, client, {
        transactions: [
          {
            amount: { total: `${price}`, currency: 'AUD'},
            description: "TYC Registration 2021"
          }
        ]
      });
    }
  }

  render() {
    console.log(ENV.paypal.clientId, ENV.paypal.environment);
    const client = ENV.paypal.clientId;
    return (
      <PayPalButton env={ENV.paypal.environment}
                    client={client}
                    payment={this.payment(this.props.price)}
                    commit={true}
                    onAuthorize={this.onAuthorize(this.props.paymentAuthorised)} />
    )
  }
}
