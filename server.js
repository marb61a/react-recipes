const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config({
  path: 'variables.env'
});

// Brings in the GraphQL - Express middleware
const { graphiqlExpress, graphqlExpress} = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const Recipe = require('./models/Recipe');
const User = require('./models/User');

// GraphQL needs its own schemas
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {console.log('DB Connected')})
  .catch(err => console.error(err));

const app = express();

// Create graphiql application
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

// Connect mongoose schemas to graphql
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: {
    Recipe,
    User
  }
}));

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
