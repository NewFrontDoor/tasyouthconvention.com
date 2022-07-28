import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { map } from 'lodash';
import { decode } from 'he';

import { registerInputField, registerMobileNumberField, registerCaptcha, registerCheckbox, registerDropdown } from './redux-form-fields' //eslint-disable-line

import * as val from './validations';

const validateForm = values => {
  const errors = {};
  return errors;
}

const RegiserRoadShowNorthForm = ({ handleSubmit, pristine, reset, submitting, noYouthGroup, youthGroup, registeredGroups }) => {
  const mappedGroups = map(registeredGroups, g => ({ key: g.uuid, label: decode(g.title) }));
  return (
    <form onSubmit={handleSubmit}>
      <Field id="field_given_name" name="field_given_name" label="Given Name" component={registerInputField} validate={[val.required, val.minLength(2), val.maxLength(50)]} />
      <Field id="field_family_name" name="field_family_name" label="Family Name" component={registerInputField} validate={[val.required, val.minLength(2), val.maxLength(50)]} />
      {!noYouthGroup &&
        <Field id="field_youth_group" name="field_youth_group" label="Your Youth Group" placeholder="" component={registerDropdown} options={mappedGroups} validate={[val.minLength(5), val.maxLength(50)]} />
      }
      {!youthGroup &&
        <Field id="field_no_youth_group" name="field_no_youth_group" label="My youth group is not coming to TYC or I'm not a part of a youth group" placeholder="" component={registerCheckbox} />
      }
      {noYouthGroup &&
        <p>We'd still love to have you at TYC.  Please contact us on Facebook or at tasyouthcon@gmail.com and we'll sort out a youth group for you to come to TYC with.</p>
      }
      <Field id="field_mobile_number" name="field_mobile_number" label="Your Mobile Number" placeholder="Mobile Number" component={registerMobileNumberField} validate={[val.required, val.validMobile]} />
      <Field id="field_email_address" name="field_email_address" label="Your Email Address" placeholder="Enter your email address" component={registerInputField} validate={[val.required, val.validEmail]} />
      <Field id="recaptchaKey" name="recaptchaKey" label="Fill in this to help us prevent loads of spam submissions" component={registerCaptcha} validate={val.required} />
      <button className="btn btn-success" type="submit">Register for Roadshow North</button>
    </form>
  );
}

const RoadshowNorthReduxForm = reduxForm({
  form: 'registerIndividual',
  validate: validateForm
})(RegiserRoadShowNorthForm);

const fieldSelector = formValueSelector('registerIndividual');

export default connect(state => ({
  noYouthGroup: fieldSelector(state, 'field_no_youth_group'),
  youthGroup: fieldSelector(state, 'field_youth_group')
}))(RoadshowNorthReduxForm);
