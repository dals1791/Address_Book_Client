import {gql} from '@apollo/client'

export const LOGIN = gql`
query login($username: String!, $password: String!){
  login(username: $username, password: $password){
    token
  }
}
`

export const GET_USERS = gql`
  {
    users{
      _id
      name
      handle
      connections{
      name
      }
      groups{
        _id
        title
      }
    }
  }`