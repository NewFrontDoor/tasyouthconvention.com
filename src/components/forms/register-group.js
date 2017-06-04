import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

import { registerInputField, registerMobileNumberField, registerEmailField } from './redux-form-fields'

import ReCAPTHCA from './recaptcha';

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const minLength = min => value =>
  value && value.length < min ? `Must be at least ${min} characters` : undefined;
const required = value => value ? undefined : 'This value is required';
const validMobile = value => value && /^04[0-9]{2}\s[0-9]{3}\s[0-9]{3}$/i.test(value) ? undefined : 'Number must be a valid number in the format 0400 000 000';
const validEmail = value => value && /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(value) ? undefined : "This doesn't looks like a valid email"

const handleSubmit=() => {
  console.log('ready to submit');
}

const RegisterGroupForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field id="givenName" name="givenName" label="Given Name" component={registerInputField} type="text" validate={[required,minLength(2),maxLength(50)]} />
      <Field id="familyName" name="familyName" label="Family Name" component={registerInputField} type="text" validate={[required, minLength(2), maxLength(50)]} />
      <Field id="youthGroup" name="youthGroup" label="Your Youth Group" placeholder="Fill this in so we can register people from your youth group to the convention" component={registerInputField} type="text" validate={[required, minLength(5), maxLength(50)]} />
      <Field id="mobileNumber" name="mobileNumber" label="Your Mobile Number" placeholder="Mobile Number" component={registerMobileNumberField} validate={[required, validMobile]} />
      <Field id="emailAddress" name="emailAddress" label="Your Email Address" placeholder="Enter your email address" component={registerInputField} validate={[required, validEmail]} />
      <FormGroup>
        <ControlLabel>Fill in this to help us prevent loads of spam submissions</ControlLabel>
        <Field name="recaptchaKey" component={ReCAPTHCA} />
      </FormGroup>
      <button className="btn btn-success" type="submit">Register your Group</button>
    </form>
  );
}

export default reduxForm({
  form: 'registerGroup'
})(RegisterGroupForm);
