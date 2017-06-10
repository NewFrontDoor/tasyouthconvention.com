import React from 'react';

import RegisterGroupForm from '../../forms/register-group';
import accounting from 'accounting';



export default ({show, currentPrice, submitRegistration}) => {
  if (!show) return null;
  return (
    <div>
      <p>Use this form to register yourself and your youth group for TYC.  Once your youth group has been approved, people in your youth group will be able to register for TYC.</p>
      <p>Current price for TYC is {accounting.formatMoney(currentPrice)}.</p>
      <RegisterGroupForm onSubmit={submitRegistration} />
    </div>
  )
}
