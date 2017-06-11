import React from 'react';
import MakePaymentForm from '../../forms/make-payment';

export default ({show, currentPrice, submitPayment}) => {
  if (!show) return null;

  return (
    <MakePaymentForm paymentAuthorised={submitPayment} price={currentPrice} />
  );
}
