import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

import { registerInputField, registerMobileNumberField, registerCaptcha, registerCheckbox, registerDropdown } from './redux-form-fields'
import { map } from 'lodash';
import {decode} from 'he';

import * as val from './validations';

const validateForm = values => {
  const errors = {};
  return errors;
}

const RegisterYouthLeaderTrainingForm = ({ handleSubmit, pristine, reset, submitting, noYouthGroup, youthGroup, registeredGroups }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field id="field_given_name" name="field_given_name" label="Given Name" component={registerInputField} validate={[val.required,val.minLength(2),val.maxLength(50)]} />
      <Field id="field_family_name" name="field_family_name" label="Family Name" component={registerInputField} validate={[val.required, val.minLength(2), val.maxLength(50)]} />
      <Field id="field_mobile_number" name="field_mobile_number" label="Your Mobile Number" placeholder="Mobile Number" component={registerMobileNumberField} validate={[val.required, val.validMobile]} />
      <Field id="field_email_address" name="field_email_address" label="Your Email Address" placeholder="Enter your email address" component={registerInputField} validate={[val.required, val.validEmail]} />
      <Field id="recaptchaKey" name="recaptchaKey" label="Fill in this to help us prevent loads of spam submissions" component={registerCaptcha} validate={val.required} />
      <button className="btn btn-success" type="submit">Register for Tas Youth Leader Training</button>
    </form>
  );
}

const YouthLeaderTrainingReduxForm = reduxForm({
  form: 'registerIndividual',
  validate: validateForm
})(RegisterYouthLeaderTrainingForm);

const fieldSelector = formValueSelector('registerIndividual');

export default connect(state => ({
  noYouthGroup: fieldSelector(state, 'field_no_youth_group'),
  youthGroup: fieldSelector(state, 'field_youth_group')
}))(YouthLeaderTrainingReduxForm);
