import React from 'react'
import {useQuery, useMutation} from '@apollo/client'
import{GET_CONNECTIONS} from '../../../graphql/Queries'
import{DESTROY_CONNECTION} from '../../../graphql/Mutations'

const Connections = (props) =>{
  const {loading, error, data}= useQuery(GET_CONNECTIONS)
    const [destroyConnection] = useMutation(DESTROY_CONNECTION) 
      
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
        console.log('connection Data:',data)
        // console.log('user data:',userData)

    const handleDestroyConnection= (id) =>{
      // console.log("this is connectionId", id)
      destroyConnection({ variables: { connectionId: id }
      })
    }

    const renderUsers = () =>{
      return data.userProfile.connections.map(user=>{
        return (
        <div>
          <p>{user.name}</p>
          <p>@{user.handle}</p>
          <button onClick={()=>{handleDestroyConnection(user._id)}}>X</button>
          <hr/>
        </div>
        )
      })
    }
    
return(<>
    
    <div className="connections-main-container">
    <header className="connections-header">
        Connections
    </header>
    <div className="my-connections-body-container">
      <h4>My Connections:</h4>
    {renderUsers()}

    </div>
    </div>
</>)

}
export default Connections