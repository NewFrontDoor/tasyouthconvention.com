import React from 'react';

import RegisterGroupForm from '../../forms/register-group';
import accounting from 'accounting';



export default ({ show, currentPrice, submitRegistration, registeredGroups }) => {
  if (!show) return null;
  return (
    <div>
      <p>Use this form to register yourself and your youth group for Roadshow North.  Once your youth group has been approved, people in your youth group will be able to register for TYC.</p>
      <p>Current price for TYC leaders is {accounting.formatMoney(currentPrice)}</p>
      <RegisterGroupForm onSubmit={submitRegistration} registeredGroups={registeredGroups} />
    </div>
  )
}
