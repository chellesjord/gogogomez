import { gql } from '@apollo/client';

// * will be added later

// export const LOGIN_USER = gql`
// mutation Login($email: String!, $password: String!){
//     login(email: email, password: $password){
//         token
//         user{
//             username
//             email
//             password
//         }
//     }
// }
// `;

export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $address: String!, $phoneNumber: String!){
    addUser(firstName: $firstName, lastName: $lastName,  email: $email, password: $password, address: $address, phoneNumber: $phoneNumber) {
        token
        user {
            firstName
            lastName
            email
            address
            phoneNumber
        }
    }
}
`;

