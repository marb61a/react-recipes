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

  render() {
    return (
      <div>
        Signin
      </div>
    );
  }
}

export default Signin;