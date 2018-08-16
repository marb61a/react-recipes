import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({_id, name, category}) => (
  <li key={_id}>
    <h4>{name}</h4>
    <p>
      <strong>
        {category}
      </strong>
    </p>
  </li>
);

export default RecipeItem;