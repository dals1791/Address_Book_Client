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
export const ADD_CONNECT_TO_GROUP = gql`
mutation addConnectionToGroup($groupId: ID!, $handle: String){
    addConnectionToGroup(groupId: $groupId, handle: $handle){
        _id
        title
        connections{
            name
        }
    }
}
`
export const DESTROY_CONNECT_FROM_GROUP = gql`
mutation destroyConnectionFromGroup($groupId: ID!, $handle: String){
    destroyConnectionFromGroup(groupId: $groupId, handle: $handle){
        _id
        title
        connections{
            name
        }
    }
}
`

export const ADD_CONNECTION = gql`
    mutation addConnection($handle: String){
        addConnection(handle: $handle){
            name
        }
    }
`
export const DESTROY_CONNECTION = gql`
    mutation destroyConnection($connectionId: ID){
        destroyConnection(connectionId: $connectionId){
            _id
            name
        }
    }
`

export const ADD_CONTACT_INFO = gql`
    mutation addContactInfo( $phone: String, $email: String, $street: String, $aptNum: Int, $city: String, $state:String, $zipcode: String){
        addContactInfo(phone: $phone, email: $email, street: $street, aptNum: $aptNum, city: $city, state: $state, zipcode: $zipcode){
            _id
            name
        }
    }
`