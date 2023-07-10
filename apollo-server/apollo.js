const { ApolloServer } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const { users } = require('../utils/utils');
const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');
require('dotenv').config();



const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const token = req.headers.authorization || '';
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            const userId = decoded.userId;
            const currentUser = users.find((user) => user.id === userId);
            return { currentUser };
        } catch (error) {
            return {};
        }
    },
});

module.exports = server;
