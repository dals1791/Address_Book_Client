import React from 'react'
import {useQuery} from '@apollo/client'
import{GET_USERS} from './graphql/Queries'
import Auth from './components/login/Auth'
import './styles/App.css';

function App() {
  const [users, setUsers] = React.useState(null)
  
    // const {loading, error, data}= useQuery(GET_USERS)
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;
      
  // const renderUsers = () =>{
  //   return data.users.map(user=>{
  //     console.log(user)
  //     return (
        
  //     <div>
  //       <p>{user.name}</p>
  //       <p>{user.handle}</p>
  //       <p>{user.groups.map(group=>{
  //         return(<p>{group.title}</p>)
  //       })}</p>
  //       <p>{user.connections.map(connection=>{
  //         return(<p>{connection.name}</p>)
  //       })}</p>
  //     </div>
  //     )
  //   })
  // }
  
    return (
    
    <div className="App">
      <header className="App-header">
       <Auth/>
      </header>
    </div>
    
  );
}

export default App;
