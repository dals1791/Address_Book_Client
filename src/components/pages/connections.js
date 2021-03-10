import React from 'react'
import {useQuery, useMutation} from '@apollo/client'
import{GET_USERS} from '../../graphql/Queries'
import{DESTROY_CONNECTION} from '../../graphql/Mutations'

const Connections = (props) =>{
    const {loading, error, data}= useQuery(GET_USERS)
    const [destroyConnection] = useMutation(DESTROY_CONNECTION) 
      
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
        

    const handleDestroyConnection= (id) =>{
      console.log("this is connectionId", id)
      destroyConnection({ variables: { connectionId: id }
        // update: cache => {
        //   let connections = [...cache.readQuery({ query: GET_USER_PROFILE}).userProfile.groups];
        //   groups = groups.filter(({id: groupId}) => groupId !== id);
        //   cache.writeQuery({ 
        //       query: GET_USER_PROFILE, 
        //       data: { userProfile: [...data.userProfile.groups, groups] }
        //     })
        // }
      })
    }

    const renderUsers = () =>{
      return data.users.map(user=>{
        // console.log(user)
        return (
        <div>
          <p>{user.name}</p>
          <h5>Connections:</h5>
          <p>{user.connections.map(connection=>{
            // console.log(connection)
            return(<>
            <p>{connection.name}</p>
            
            <button onClick={()=>{handleDestroyConnection(connection._id)}}>X</button>
            
            </>)
          })}</p>
          <hr/>
        </div>
        )
      })
    }
    
return(<>
    <div>{renderUsers()}</div>
</>)

}
export default Connections