import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const siteKey = "6LfuIiMUAAAAAM5Cc8sN0IlN6ZrzxroMZdU44f9A";

const Captcha = (props) => (
  <div>
    <ReCAPTCHA
      sitekey={siteKey}
      onChange={props.input.onChange}
    />
  </div>
);

export default Captcha;
