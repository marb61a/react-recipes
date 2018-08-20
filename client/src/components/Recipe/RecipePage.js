import React from "react";
import { withRouter } from "react-router-dom";
import { Query } from "react-apollo";

import { GET_RECIPE } from "../../queries";
import LikeRecipe from "./LikeRecipe";
import Spinner from "../Spinner";

const RecipePage = ({match}) => {
  const { _id } = match.params;

  return (
    <Query query={GET_RECIPE} variables={{ _id }}>
      {({ data, loading, error }) => {
        if (loading) return <Spinner />;
        if (error) return <div>Error</div>;

        return(
          <div>
            <div 
              style={{
                background: `url(${
                  data.getRecipe.imageUrl
                }) center center / cover no-repeat`
              }}
              className="recipe-image"
            />
            <div className="recipe-header">
              <h2 className="recipe-name">
                <strong>{data.getRecipe.name}</strong>
              </h2>
            </div>
          </div>
        )
      }}
    </Query>
  );
}

export default withRouter(RecipePage);