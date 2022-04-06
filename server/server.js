const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas')
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

// const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

const startServer = async () => {
    // creating new apollo server
    const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

    await server.start();

    // integrate our Apollo server with the express application as middleware
    server.applyMiddleware({ app });

    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
}

startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static assets under here 



if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

//   app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });