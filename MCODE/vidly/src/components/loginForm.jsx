import React, { Component } from 'react';
import Input from './common/input';
class LoginForm extends Component {
  state = {
    account: { userName: '', password: '' },
    error: {},
  };
  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.userName.trim() === '')
      errors.userName = 'UserName is required';
    if (account.password.trim() === '')
      errors.password = 'Password is required';

    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors });
    if (errors) return;
    // call the server
    console.log('form submitted');
  };
  handleChnage = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="userName"
            value={account.userName}
            lable="UserName"
            onChnage={this.handleChnage}
          />
          <Input
            name="password"
            value={account.password}
            lable="Password"
            onChnage={this.handleChnage}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
