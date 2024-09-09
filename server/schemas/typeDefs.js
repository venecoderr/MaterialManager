const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Material {
    id: ID!
    partName: String!
    partNumber: String!
    description: String!
    quantInStock: Int!
    unit: String!
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  type Query {
    users: [User]
    user(id: ID!): User
    getMaterials: [Material]
    getMaterialById(id: ID!): Material
  }

  type Mutation {
    # User-related mutations
    addUser(username: String!, email: String!, password: String!): User
    updateUser(id: ID!, username: String, email: String): User
    deleteUser(id: ID!): User
    login(email: String!, password: String!): AuthData
    
    # Material-related mutations
    addMaterial(
      partName: String!,
      partNumber: String!,
      description: String!,
      quantInStock: Int!,
      unit: String!
    ): Material

    updateMaterial(
      id: ID!,
      partName: String,
      partNumber: String,
      description: String,
      quantInStock: Int,
      unit: String
    ): Material

    removeMaterial(id: ID!): Material
  }
`;

module.exports = typeDefs;
