import React from 'react';

export default ({show, isGroupRegistration}) => {
  if (!show) return null;

  return (
    <div>
      <div className="alert alert-success">Success! you have successfully registered for TYC.</div>
      <p>You should receive an email confirming your registration and letting you know all the details about TYC that you need to know.  If you have any questions, or you don't receive that email, please send us an email at <a href="mailto:tasyouthconvention@gmail.com">tasyouthconvention@gmail.com</a> or contact us on Facebook about your registration.</p>
      {isGroupRegistration &&
        <p>As you've registered your group, once we've authorised it, people in your youth group should be able to register for TYC.</p>
      }
      <p>We look forward to seeing you at TYC!</p>
    </div>
  )
}
