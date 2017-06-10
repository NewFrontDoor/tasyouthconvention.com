import React from 'react';

export default ({show}) => {
  if (!show) return null;

  return (
    <div>
      <div className="alert alert-success">Success! you have successfully registered for TYC.  You should receive an email with details about TYC, and we'll see you there on the 11th November 2017.</div>
    </div>
  )
}
