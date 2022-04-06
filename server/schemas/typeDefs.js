const { gql } = require('apollo-server-express');

// creating type defs
const TypeDefs = gql`
    type User {
        _id: ID
        email: String
        password: String
        address: String
        allergies: [String]
        phoneNumber: Int
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        me: User
    }

    type Mutation {
        login(email: String!, password: String!, username: String!): Auth
    }

`

module.exports = TypeDefs;