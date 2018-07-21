import React, { Component } from 'react';
class LoginForm extends Component {
  state = {
    account: { userName: '', password: '' },
  };
  handleSubmit = e => {
    e.preventDefault();
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
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              value={account.userName}
              onChange={this.handleChnage}
              name="userName"
              autoFocus
              id="userName"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={account.password}
              onChange={this.handleChnage}
              name="password"
              type="password"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
