const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
  }

  type Product {
    id: ID!
    name: String!
  }

  type Query {
    products: [Product!]!
  }
  type Mutation {
    signup(username: String!, password: String!): User!
    login(username: String!, password: String!): String
  }
`;
module.exports = typeDefs;
