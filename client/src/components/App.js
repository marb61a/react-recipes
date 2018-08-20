import React, { Component } from 'react';
import './App.css';
import { Query } from 'react-apollo';

import { GET_ALL_RECIPES } from '../queries/index';
import RecipeItem from "./Recipe/RecipeItem";
import Spinner from "./Spinner";

class App extends Component {

  render(){
    return (
      <div className="App">
        <h1 className="main-title">
          Find Recipes You'll <strong>Love</strong>
        </h1>
        <Query query={GET_ALL_RECIPES}>
          {({data, loading, error}) => {
            if(loading) return <Spinner />;
            if(error) return <div>Error</div>
            console.log(data);

            return(
              <ul>
                {data.getAllRecipes.map(recipe => (
                  <RecipeItem key={recipe._id} {...recipe} />
                ))}
              </ul>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default App;
