import React, { Component} from 'react';
import { ApolloConsumer } from "react-apollo";

import { SEARCH_RECIPES } from "../../queries";
import SearchItem from "./SearchItem";

class Search extends Component{
  state = {
    searchResults: []
  };

  handleChange = () => {

  }
  
  render(){
    const { searchResults } = this.state;

    return (
      <ApolloConsumer>
      
      </ApolloConsumer>
    )
  }
}

export default Search;