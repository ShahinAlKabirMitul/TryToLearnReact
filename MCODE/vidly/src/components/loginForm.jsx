import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
class LoginForm extends Form {
  state = {
    data: { userName: '', password: '' },
    errors: {},
  };

  schema = {
    userName: Joi.string()
      .required()
      .label('User Name'),
    password: Joi.string()
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
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('userName', 'UserName')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </form>
      </div>
    );
  }
}

export default LoginForm;
