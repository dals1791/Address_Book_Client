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
  export const GET_USER_PROFILE = gql`
  {
    userProfile{
      _id
      name
      handle
      personalContact{
        address{
          street
          aptNum
          city
          state
          zipcode
        }
        phone
        email
      }
      connections{
        name
        handle
        personalContact{
          address{
            street
            aptNum
            city
            state
            zipcode
          }
          phone
          email
        }
      }
      groups{
        _id
        title
        connections{
        name
        handle
        personalContact{
            address{
              street
              aptNum
              city
              state
              zipcode
            }
            phone
            email
          }
        }
      }
    }
  }`