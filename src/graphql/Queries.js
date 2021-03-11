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
      name
      handle
    }
  }`
  
  export const GET_USER_PROFILE = gql`
  {
    userProfile{
      _id
      name
      handle
      personalContact{
        street
        aptNum
        city
        state
        zipcode
        phone
        email
      }
      connections{
        _id
        name
        handle
        personalContact{
          street
          aptNum
          city
          state
          zipcode
          phone
          email
        }
      }
      groups{
        _id
        title
        connections{
          _id
          name
          handle
          personalContact{
            street
            aptNum
            city
            state
            zipcode
            phone
            email
          }
        }
      }
    }
  }`

export const GET_CONTACT_INFO = gql`
{
  userProfile{
    name
    handle
    personalContact{
      phone
      email
      street
      aptNum
      city
      state
      zipcode
    }
  }
}`
export const GET_CONNECTIONS = gql`
{
  userProfile{
    connections{
      _id
      name
      handle
      personalContact{
        phone
        email
        street
        aptNum
        city
        state
        zipcode
      }
    }
  }
}
`
export const GET_CONNECTIONS_CONTACT = gql`
{
  userProfile{
    connections{
      _id
      name
      handle
    }
  }
}
`