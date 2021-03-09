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

export const CREATE_GROUP = gql`
    mutation createGroup($title: String!){
        createGroup(title: $title){
            title
        }
    }

`
export const DESTROY_GROUP = gql`
    mutation destroyGroup($groupId: ID){
        destroyGroup(groupId: $groupId){
            title
        }
    }
`
