import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

import {Mutation} from 'react-apollo';

import {SIGNIN_USER} from '../../queries'
import Error from '../Error'

const initialState = {
  username: "",
  password: ""
}

class Signin extends Component {
  state = {
    ...initialState
  };

  clearState = () => {
    this.setState({
      ...initialState
    })
  }

  handleChange = event => {
    const {name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event, signinUser) => {
    event.preventDefault();

    signinUser()
      .then(data => {
        console.log(data);

        localStorage.setItem('token', data.signinUser.token)

        this.clearState();
      })
  }

  validateForm = () => {
    const {username, password} = this.state;

    const isInvalid = !username || !password;

    return isInvalid;
  }

  render() {
    return (
      <div>
        Signin
      </div>
    );
  }
}

export default Signin;