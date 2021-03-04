import React from 'react'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import {gql,  useQuery} from '@apollo/client'
import './App.css';

function App() {
  
  const Users = gql`
      {
        users{
          _id
          name
        }
      }`
    
  
  const GetUsers = () =>{
    const {loading, error, data}= useQuery(Users)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

  return data.users.map((ele) => (
    <div >
      <h2>This is gql query</h2>
      <p>
        {ele._id}<br/>
        {ele.name}
      </p>
    </div>
  ));
  }

  return (
    
    <div className="App">
      <header className="App-header">
       {GetUsers()}
      </header>
    </div>
    
  );
}

export default App;
