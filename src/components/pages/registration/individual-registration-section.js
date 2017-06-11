import React from 'react';

import RegisterIndividualForm from '../../forms/register-individual';
import accounting from 'accounting';

export default ({show, currentPrice, submitRegistration, registeredGroups}) => {
  if (!show) return null;
  return (
    <div>
      <p>Use this form to register for TYC.  If your youth group has been registered, they should appear in the list below.</p>
      <p>The Current price to attend TYC is {accounting.formatMoney(currentPrice)}.</p>
      <RegisterIndividualForm onSubmit={submitRegistration} registeredGroups={registeredGroups} />
    </div>
  )
}
