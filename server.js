const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config({
  path: 'variables.env'
});
const cors = require('cors');
const jwt = require('jsonwebtoken');

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

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};
app.use(cors(corsOptions));

// Setup JWT middleware
app.use(async (req, res, next) => {
  const token = req.headers["authorization"];

  if(token !== null){
    try {
      const currentUser = await jwt.verify(token, process.env.SECRET);
      req.currentUser = currentUser;	
    } catch(err){
      console.error(err);
    }
  }

  next();
});

// Create graphiql application
// app.use('/graphiql', graphiqlExpress({
//   endpointURL: '/graphql'
// }));

// Connect mongoose schemas to graphql
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress(({ currentUser }) => ({
    schema,
    context: {
      Recipe,
      User,
      currentUser
    }
  }))
);

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
