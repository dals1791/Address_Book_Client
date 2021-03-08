import {gql} from '@apollo/client'

export const CREATE_USER = gql`
    mutation createUser($username: String!, $password: String!, $name: String!, $handle: String!){
        createUser(input: {username: $username, password: $password, name: $name, handle: $handle})
        
        {
            name
            handle
        }
    }
`
