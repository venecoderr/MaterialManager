import { gql } from 'apollo-server-express'

export const typeDefs = gql`
type User {
  id: ID!
  name: String!
  email: String!
  employeeNumber: Int!
}

type Product {
  id: ID!
  name: String!
  description: String!
  partNumber: Int!
  listNumber: Int!
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

type Query {
  users: [User]
  user(id: ID!): User
  products: [Product]
  product(id: ID!): Product
}

# Mutation type for data modification
type Mutation {
  addUser(username: String!, email: String!, password: String!): User
  deleteUser(id: ID!): User
  login(email: String!, password: String!): AuthData
}
`;