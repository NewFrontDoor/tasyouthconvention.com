import React from "react";
import { Field, reduxForm } from "redux-form";

import {
	registerInputField,
	registerMobileNumberField,
	registerCaptcha,
	registerAutocomplete
} from "./redux-form-fields";
import * as val from "./validations";
import { decode } from "he";

const RegisterGroupForm = ({ handleSubmit, pristine, reset, submitting, registeredGroups }) => {
	return (
		<form onSubmit={handleSubmit}>
			<Field
				id="field_given_name"
				name="field_given_name"
				label="Given Name"
				component={registerInputField}
				type="text"
				validate={[val.required, val.minLength(2), val.maxLength(50)]}
			/>
			<Field
				id="field_family_name"
				name="field_family_name"
				label="Family Name"
				component={registerInputField}
				type="text"
				validate={[val.required, val.minLength(2), val.maxLength(50)]}
			/>
			<Field
				id="youthGroup"
				name="youthGroup"
				label="Your Youth Group"
				placeholder="Use this field to search for your group.  If it is not in the list, it will be created."
				component={registerAutocomplete}
				options={registeredGroups.map((g) => decode(g.title))}
				validate={[val.required, val.minLength(5), val.maxLength(50)]}
			/>
			<Field
				id="field_mobile_number"
				name="field_mobile_number"
				label="Your Mobile Number"
				placeholder="Mobile Number"
				component={registerMobileNumberField}
				validate={[val.required, val.validMobile]}
			/>
			<Field
				id="field_email_address"
				name="field_email_address"
				label="Your Email Address"
				placeholder="Enter your email address"
				component={registerInputField}
				validate={[val.required, val.validEmail]}
			/>
			<Field
				id="field_dietary_requirements"
				name="field_dietary_requirements"
				label="Dietary Requirements"
				placeholder="Enter any dietary requirements that you have or 'None' if you don't have any"
				component={registerInputField}
				validate={[val.required]}
			/>
			<Field
				id="recaptchaKey"
				name="recaptchaKey"
				label="Fill in this to help us prevent loads of spam submissions"
				component={registerCaptcha}
				validate={val.required}
			/>
			<button className="btn btn-success" type="submit">
				Register your Group
			</button>
		</form>
	);
};

export default reduxForm({
	form: "registerGroup"
})(RegisterGroupForm);
