import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { login } from '../services/authService';
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

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { data: jwt } = await login(data.userName, data.password);
      localStorage.setItem('token', jwt);
      this.props.history.push('/');
      console.log(jwt);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.userName = ex.response.data;
        this.setState({ errors });
      }
    }
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
