import React from 'react';

import RegisterIndividualForm from '../../forms/register-individual-youth-leader-training';
import accounting from 'accounting';

export default ({show, currentPrice, submitRegistration, registeredGroups}) => {
  if (!show) return null;
  return (
    <div>
      <p>Use this form to register for Tas Youth Leader Training.  If your youth group has been registered, they should appear in the list below.</p>
      <p>The Current price to attend Tas Youth Leader Training is {accounting.formatMoney(currentPrice)}</p>
      <h3>Note about accommodation:</h3>
      <strong>TYC doesn't provide accommodation or food other than morning tea. Each group organises their own accommodation and meals. There are plenty of great options in Bicheno which can be found through a quick google search!</strong>
      <RegisterIndividualForm onSubmit={submitRegistration} registeredGroups={registeredGroups} />
    </div>
  )
}
