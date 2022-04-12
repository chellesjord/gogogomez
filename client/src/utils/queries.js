import { gql } from '@apollo/client'

export const QUERY_USERS = gql`
query Users{
    users {
        firstName
        lastName
        username
        email
    }
}
`;