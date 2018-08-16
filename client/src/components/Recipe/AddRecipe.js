import React from 'react';
import { withRouter } from 'react-router-dom';

const AddRecipe = () => (
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
);

export default withRouter(AddRecipe);