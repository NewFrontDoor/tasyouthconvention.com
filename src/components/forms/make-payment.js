import React from 'react';
import accounting from 'accounting';

import PaypalCheckout from '../PaypalCheckout';

export default ({ paymentAuthorised, price }) => {
  return (
    <section>
    {price > 0? <div>
      <h3>Make a Payment to TYC</h3>
      <p>To pay your registration amount of {accounting.formatMoney(price)}, please click the Paypal button below.  After you have entered your paypal information, please leave the window open until confirmation has been received.</p>
      <PaypalCheckout
          paymentAuthorised={paymentAuthorised}
          price={price} />
    </div> : <div><p>Thank you for your registration.</p></div>}
    </section>
  )
}
