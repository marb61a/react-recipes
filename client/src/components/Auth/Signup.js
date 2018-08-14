import React from 'react';
import { Mutation } from 'react-apollo';

class Signup extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  };

  handleChange = event => {
    const {name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { username, email, password, passwordConfirmation } = this.state;

    return (
      <div className="App">
        <h2 className="App">Signup</h2>
        <Mutation mutation={SIGNUP_USER}>
          {() => {
            return (
              <form className="form">
                <input 
                  type="text" 
                  name="username" 
                  placeholder="Username"
                  value={username}
                  onChange={this.handleChange}
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address"
                  onChange={this.handleChange}
                />
                <input 
                  type="password" 
                  name="password" 
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                />
                <input 
                  type="password" 
                  name="passwordConfirmation" 
                  placeholder="Confirm Password"
                  value={passwordConfirmation}
                  onChange={this.handleChange}
                />
                <button type="submit" className="button-primary">
                  Submit
                </button>
              </form>
            );
          }}
          
        </Mutation>
      </div>
    );
  }
}

export default Signup;