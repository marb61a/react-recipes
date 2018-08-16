import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({_id, name, category}) => (
  <li key={recipe._id}>
    <h4>{recipe.name}</h4>
    <p>
      <strong>
        {recipe.category}
      </strong>
    </p>
  </li>
);

export default RecipeItem;