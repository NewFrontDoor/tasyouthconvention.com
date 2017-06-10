import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

import { registerInputField, registerMobileNumberField, registerEmailField, registerCaptcha } from './redux-form-fields'
import * as val from './validations';

const RegisterGroupForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field id="field_given_name" name="field_given_name" label="Given Name" component={registerInputField} type="text" validate={[val.required,val.minLength(2),val.maxLength(50)]} />
      <Field id="field_family_name" name="field_family_name" label="Family Name" component={registerInputField} type="text" validate={[val.required, val.minLength(2), val.maxLength(50)]} />
      <Field id="title" name="title" label="Your Youth Group" placeholder="Fill this in so we can register people from your youth group to the convention" component={registerInputField} type="text" validate={[val.required, val.minLength(5), val.maxLength(50)]} />
      <Field id="field_mobile_number" name="field_mobile_number" label="Your Mobile Number" placeholder="Mobile Number" component={registerMobileNumberField} validate={[val.required, val.validMobile]} />
      <Field id="field_email_address" name="field_email_address" label="Your Email Address" placeholder="Enter your email address" component={registerInputField} validate={[val.required, val.validEmail]} />
      <Field id="recaptchaKey" name="recaptchaKey" label="Fill in this to help us prevent loads of spam submissions" component={registerCaptcha} validate={val.required} />
      <button className="btn btn-success" type="submit">Register your Group</button>
    </form>
  );
}

export default reduxForm({
  form: 'registerGroup'
})(RegisterGroupForm);
