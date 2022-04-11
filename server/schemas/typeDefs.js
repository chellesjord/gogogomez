const { gql } = require('apollo-server-express');

// creating type defs
const TypeDefs = gql`
    type User {
        _id: ID
        email: String
        firstName: String
        lastName: String
        password: String
        address: String
        allergies: [String]
        phoneNumber: String
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
        addUser(firstName: String!, lastName: String!, email: String!, password: String!, address: String!, allergies: String, phoneNumber: String! ): User
    }
`

module.exports = TypeDefs;