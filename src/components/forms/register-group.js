import React from 'react';
import { Field, reduxForm } from 'redux-form';

import ReCAPTHCA from './recaptcha';

const RegisterGroupForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="givenName">
          First Name
          <Field id="givenName" name="givenName" component="input" type="text" />
          <p className="help-text">Your name will be used to identify you in this case</p>
        </label>
      <div>
        <label htmlFor="familyName">
          Last Name
          <Field id="familyName" name="familyName" component="input" type="text" />
        </label>
      </div>
      <div>
        <Field name="recaptchaKey" component={ReCAPTHCA} />
      </div>
      <button className="btn btn-success" type="submit">Submit</button>
    </form>
  );
}

export default reduxForm({
  form: 'registerGroup'
})(RegisterGroupForm);
