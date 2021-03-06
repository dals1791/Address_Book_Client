import React from 'react'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import {gql,  useQuery} from '@apollo/client'
import './App.css';

function App() {
  const [users, setUsers] = React.useState(null)
  const GET_USERS = gql`
      {
        users{
          _id
          name
          handle
          # connections{
          #   user{
          #     _id
          #     }
          # }
          groups{
            _id
            title
          }
        }
      }`
  
    const {loading, error, data}= useQuery(GET_USERS)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
      
  const renderUsers = () =>{
    return data.users.map(user=>{
      console.log(user)
      return (
        
      <div>
        <p>{user.name}</p>
        <p>{user.handle}</p>
        <p>{user.groups.map(group=>{
          return(<p>{group._id}</p>)
        })}</p>
      </div>
      )
    })
  }
  React.useEffect(()=>{setUser(data.users)}, [])
    return (
    
    <div className="App">
      <header className="App-header">
       {renderUsers()}
      </header>
    </div>
    
  );
}

export default App;
