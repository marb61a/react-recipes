import React from "react";
import { Link } from "react-router-dom";
import { Query, Mutation } from "react-apollo";
import Spinner from "../Spinner";

import {
  GET_USER_RECIPES,
  DELETE_USER_RECIPE,
  GET_ALL_RECIPES,
  GET_CURRENT_USER
} from "../../queries";

const handleDelete = deleteUserRecipe => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this recipe?"
  );

  if(confirmDelete){
    deleteUserRecipe()
      .then(({data}) => {
        console.log(data);
      });
  }
};

const UserRecipes = ({ username }) => (
  <Query query={GET_USER_RECIPES} variables={{ username }}>
    {
      ({data, loading, error}) => {
        if (loading) return <Spinner />;
        if (error) return <div>Error</div>;

        return(
          <ul>
            <h3>Your Recipes</h3>
            {
              !data.getUserRecipes.length && (
                <p>
                  <strong>You have not added any recipes yet</strong>
                </p>
              )
            }
          </ul>
        )
      }
    }
  </Query>
);