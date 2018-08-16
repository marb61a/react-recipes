import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Mutation } from "react-apollo";

import { ADD_RECIPE, GET_ALL_RECIPES, GET_USER_RECIPES } from "../../queries";
import Error from "../Error";

const initialState = {
  name: "",
  imageUrl: "",
  instructions: "",
  category: "Breakfast",
  description: "",
  username: ""
};

class AddRecipe extends Component{
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render(){
    const {
      name,
      imageUrl,
      category,
      description,
      instructions,
      username
    } = this.state;

    return(
      <Mutation
        mutation={ADD_RECIPE}
        variables={{
          name,
          imageUrl,
          category,
          description,
          instructions,
          username
        }}
      >  
        <div className="App">
          <h2 className="App">Add Recipe</h2>
          <form className="form">
            <input
              type="text"
              name="name"
              placeholder="Add Name"
              onChange={this.handleChange}
            />
            <select name="category" onChange={this.handleChange}>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
            </select>
            <input
              type="text"
              name="description"
              placeholder="Add Description"
              onChange={this.handleChange}
            />
          </form>
        </div>
      </Mutation>
    )
  }
};

export default withRouter(AddRecipe);