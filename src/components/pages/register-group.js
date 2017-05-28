import React from 'react';
import RegisterGroupForm from '../forms/register-group';

const formSubmit = (values) => {
  console.log('form submitted');
  console.log(values);
};

export default () => {
  return (<RegisterGroupForm onSubmit={formSubmit} />);
}
