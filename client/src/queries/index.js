import { gql } from 'apollo-boost';

/* Recipes Queries */
export const GET_ALL_RECIPES = gql`
  query {
    getAllRecipes {
      name
      description
      instructions
      category
      likes
      createdDate
    }
  }
`;

export const GET_RECIPE = gql `
  query($_id: ID!){
    getRecipe(_id: $_id){
      _id
      name
      description
      instructions
      category
      likes
      createdDate
    }
  }
`;

/* Recipes Mutations */
export const ADD_RECIPE = gql`
  mutation(
    $name: String!
    $imageUrl: String!
    $description: String!
    $category: String!
    $instructions: String!
    $username: String
  ) {
    addRecipe(
      name: $name
      imageUrl: $imageUrl
      description: $description
      category: $category
      instructions: $instructions
      username: $username
    ) {
      ...CompleteRecipe
    }
  }
`;

/* User Queries */
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      username,
      joinDate,
      email
    }
  }
`;

/* User Mutations */
export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation($username : String!, $email : String!, $password : String!) {
    signupUser(username : $username, email : $email, password : $password) {
      token
    }
  }
`;