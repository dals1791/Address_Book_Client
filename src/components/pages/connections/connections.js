import React, {useState} from 'react'
import {useQuery, useMutation} from '@apollo/client'
import{GET_CONNECTIONS} from '../../../graphql/Queries'
import{DESTROY_CONNECTION} from '../../../graphql/Mutations'
import AddConnectionForm from './AddConnectionForm'
import Address from '../../Address'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import './connections.css'

const Connections = (props) =>{
const [toggleId, setToggleId]= useState(null)
const [toggle, setToggle]= useState(false)

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
    const handleContactInfo =(id)=>{
      setToggleId(id)
      setToggle(toggle=>!toggle)
    }

    

    const renderUsers = () =>{
      return data.userProfile.connections.map(connection=>{
        return (
          <>
        <div className="connection-container" onClick={()=>{handleContactInfo(connection._id)}}>
          <div className="connection-name-container">
            <p className="name">{connection.name} </p>
            <small className="handle"> [@{connection.handle}]</small>
          </div>
          <button className="connection-trash-button" onClick={()=>{handleDestroyConnection(connection._id)}}>
            <FontAwesomeIcon  className="group-trash-icon" style={{fontSize: "16px"}} icon={faTrash} />
          </button>
      
        </div>
        {toggleId ===connection._id && toggle ? 
          <div className="connection-contact-container">
          <p>Phone: {connection.personalContact.phone}</p>
          <p>Email: {connection.personalContact.email}</p>
          <p>Street: {connection.personalContact.street}</p>
          <p>apt#: {connection.personalContact.aptNum}</p>
          <p>City: {connection.personalContact.city}</p>
          <p>State: {connection.personalContact.state}</p>
          <p>Zipcode: {connection.personalContact.zipcode}</p>
        </div>
        :
        null
      }
        
        </>
        )
      })
    }
    
return(<>
    
    <div className="connections-main-container">
    <header className="connections-header">
        <AddConnectionForm/>
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