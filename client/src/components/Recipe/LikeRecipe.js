import React, { Component } from "react";
import { Mutation } from "react-apollo";

import { LIKE_RECIPE, UNLIKE_RECIPE, GET_RECIPE } from "../../queries";
import withSession from "../withSession";

class LikeRecipe extends Component {
  state = {
    liked: "false",
    username: ""
  };

  componentDidMount(){
    if(this.props.session.getCurrentUser){
      const { username, favorites } = this.props.session.getCurrentUser;

    }
  }

  render(){
    const { liked, username } = this.state;
    const { _id } = this.props;

    return (
      <Mutation>
      
      </Mutation>
    );
  }
}

export default withSession(LikeRecipe);