import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import MaskedInput from 'react-bootstrap-maskedinput';

export const getValidationState = ({touched, error, warning}) => {
  if (!touched)
    return '';
  if (error)
    return 'error';
  if (warning)
    return 'warning';
  return 'success';
}

export const registerInputField = ({id, name, label, input, meta, type, placeholder, ...custom}) => (
  <FormGroup
    controlId={id}
    validationState={getValidationState(meta)}
    >
    <ControlLabel>{label}</ControlLabel>
      <FormControl
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={input.value}
        onChange={input.onChange}
        onBlur={input.onBlur}
        />
      <div className="help-block">
        {meta.touched ? meta.error : ""}
      </div>
  </FormGroup>
)

export const registerMobileNumberField = ({id, name, label, input, meta, placeholder, ...custom}) => (
  <FormGroup
    controlId={id}
    validationState={getValidationState(meta)}
    >
    <ControlLabel>{label}</ControlLabel>
      <MaskedInput
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        value={input.value}
        onChange={input.onChange}
        onBlur={input.onBlur}
        mask="1111 111 111"
        />
      <div className="help-block">
        {meta.touched ? meta.error : ""}
      </div>
  </FormGroup>
)
