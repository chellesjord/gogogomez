import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!){
    login(email: email, password: $password){
        token
        user{
            username
            email
            password
        }
    }
}
`;

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            username
            email
            password
        }
    }
}
`;
