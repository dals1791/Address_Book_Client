import React from 'react'
import {useQuery, useMutation} from '@apollo/client'
import{GET_CONNECTIONS} from '../../../graphql/Queries'
import{DESTROY_CONNECTION} from '../../../graphql/Mutations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import './connections.css'

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
        <div className="connection-container">
          <div className="connection-name-container">
            <p className="name">{user.name} </p>
            <small className="handle"> [@{user.handle}]</small>
            
          </div>
          <button className="connection-trash-button" onClick={()=>{handleDestroyConnection(user._id)}}>
            <FontAwesomeIcon  className="group-trash-icon" style={{fontSize: "16px"}} icon={faTrash} />
          </button>
      
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
      <hr/>
    {renderUsers()}

    </div>
    </div>
</>)

}
export default Connections