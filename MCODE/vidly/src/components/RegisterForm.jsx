import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
class RegisterForm extends Form {
  state = {
    data: { userName: '', password: '', name: '' },
    errors: {},
  };
  schema = {
    userName: Joi.string()
      .email()
      .required()
      .label('User Name'),
    password: Joi.string()
      .required()
      .min(5)
      .label('Password'),
    name: Joi.string()
      .required()
      .label('Password'),
  };
  doSubmit = () => {
    // call the server
    console.log('form submitted');
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('userName', 'UserName')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('name', 'Name')}
          {this.renderButton('Register')}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
