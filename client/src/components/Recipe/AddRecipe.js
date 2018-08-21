import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CKEditor from "react-ckeditor-component";
import { Mutation } from "react-apollo";

import { ADD_RECIPE, GET_ALL_RECIPES, GET_USER_RECIPES } from "../../queries";
import Error from "../Error";
import withAuth from "../withAuth";

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

  handleEditorChange = event => {
    const newContent = event.editor.getData();
    this.setState({
      instructions: newContent
    });
  };

  validateForm = () => {
    const { 
      name, imageUrl, category, description, instructions 
    } = this.state;
    const isInvalid =
      !name || !imageUrl || !category || !description || !instructions;
    
    return isInvalid;
  };

  updateCache = (cache, {data: { addRecipe }}) => {
    const { getAllRecipes } = cache.readQuery({ query: GET_ALL_RECIPES });

    cache.writeQuery({
      query: GET_ALL_RECIPES,
      data: {
        getAllRecipes: [addRecipe, ...getAllRecipes]
      }    
    })
  }

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
        {(addRecipe, { data, loading, error }) => 
          <div className="App">
            <h2 className="App">Add Recipe</h2>
            <form
              className="form"
              onSubmit={event => this.handleSubmit(event, addRecipe)}
            >
              <label htmlFor="name">Recipe Name</label>
              <input
                type="text"
                name="name"
                placeholder="Add Name"
                onChange={this.handleChange}
              />
              <label htmlFor="category">Category of Recipe</label>
              <select name="category" onChange={this.handleChange}>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
              </select>
              <label htmlFor="description">Recipe Description</label>
              <input
                type="text"
                name="description"
                placeholder="Add Description"
                onChange={this.handleChange}
              />
            </form>
          </div>
        }}
      </Mutation>
    )
  }
};

export default withRouter(AddRecipe);