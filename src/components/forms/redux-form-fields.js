import React from 'react';
import { FormGroup, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';
import MaskedInput from 'react-bootstrap-maskedinput';
import ReCAPTCHA from 'react-google-recaptcha';
import AutoSuggest from 'react-bootstrap-autosuggest';

const siteKey = "6LfuIiMUAAAAAM5Cc8sN0IlN6ZrzxroMZdU44f9A";


export const getValidationState = ({touched, error, warning}) => {
  if (!touched)
    return null;
  if (error)
    return 'error';
  if (warning)
    return 'warning';
  return 'success';
}

const RenderFormGroup = ({id, meta, label, children}) => {
  return (
  <FormGroup
    controlId={id}
    validationState={getValidationState(meta)}
    >
    <ControlLabel>{label}</ControlLabel>
    {children}
    <div className="help-block">
      {meta.touched ? meta.error : ""}
    </div>
  </FormGroup>
)};

export const registerAutocomplete = ({id, name, label, input, meta, type, placeholder, options}) => (
  <RenderFormGroup id={id} meta={meta} label={label}>
    <AutoSuggest
      datalist={options}
      placeholder={placeholder}
      id={id}
      name={name}
      value={input.value}
      onChange={input.onChange}
      onBlur={input.onBlur}
    />
  </RenderFormGroup>
)

export const registerDropdown = ({id, name, label, input, meta, type, placeholder, options}) => (
  <FormGroup
    controlId={id}
    validationState={getValidationState(meta)}
    >
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      componentClass="select"
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={input.value}
      onChange={input.onChange}
      onBlur={input.onBlur}>
      <option value=""></option>
      {options.map((o) => (
        <option key={o.key} value={o.key}>{o.label}</option>
      ))}
    </FormControl>
    <div className="help-block">
      {meta.touched ? meta.error : ""}
    </div>
  </FormGroup>
)

export const registerInputField = ({id, name, label, input, meta, type, placeholder}) => (
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

export const registerCaptcha = ({id, name, label, input, meta, placeholder, ...custom}) => (
  <FormGroup
    controlId={id}
    validationState={getValidationState(meta)}
    >
    <ControlLabel>{label}</ControlLabel>
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={input.onChange}
      />
      <div className="help-block">
        {meta.touched ? meta.error : ""}
      </div>
  </FormGroup>
)

export const registerCheckbox = ({id, name, label, input, meta, placeholder, ...custom}) => (
  <FormGroup
    controlId={id}
    validationState={getValidationState(meta)}
    >
    <Checkbox checked={input.value} value="on" onChange={e => { input.onChange(e.target.checked); input.onBlur(); }}>
      {label}
    </Checkbox>
    <div className="help-block">
      {meta.touched ? meta.error : ""}
    </div>
  </FormGroup>
)
