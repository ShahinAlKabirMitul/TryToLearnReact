import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './common/input';
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
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="userName"
            value={data.userName}
            lable="UserName"
            onChnage={this.handleChnage}
            error={errors.userName}
          />
          <Input
            name="password"
            value={data.password}
            lable="Password"
            onChnage={this.handleChnage}
            error={errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
