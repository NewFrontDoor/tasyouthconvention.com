import React from 'react';
import RegisterGroupForm from '../forms/register-group';

const formSubmit = (values) => {
  console.log('form submitted');
  console.log(values);
};

export default () => {
  return (
    <section className="container">
      <h3>Register as a youth group leader for Tasmanian Youth Convention</h3>
      <p>Use this form to register yourself and your youth group for TYC.  Once your youth group has been approved, people in your youth group will be able to register for TYC.</p>
      <RegisterGroupForm onSubmit={formSubmit} />
    </section>
  );
}
