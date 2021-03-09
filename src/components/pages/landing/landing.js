import React from 'react'
import './landing.css'
import {useMutation, useQuery, gql} from '@apollo/client'
import{GET_USER_PROFILE} from '../../../graphql/Queries'
import {DESTROY_GROUP, DESTROY_CONNECT_FROM_GROUP} from '../../../graphql/Mutations'
import GroupForm from './forms/CreateGroupForm'
import AddConnectionForm from './forms/AddConnectionToGroupForm'
import AddConnection from "./AddConnectionForm"

const Landing = () =>{
    const {loading, error, data}= useQuery(GET_USER_PROFILE)
    const [destroyGroup] = useMutation(DESTROY_GROUP)
    const [destroyConnectionFromGroup] = useMutation(DESTROY_CONNECT_FROM_GROUP)
    // console. log("this is query data", data)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    const handleDestroyGroup = (id) =>{
        destroyGroup({ variables: { groupId: id }, 
            update: cache => {
              let groups = [...cache.readQuery({ query: GET_USER_PROFILE}).userProfile.groups];
              groups = groups.filter(({id: groupId}) => groupId !== id);
              cache.writeQuery({ 
                  query: GET_USER_PROFILE, 
                  data: { userProfile: [...data.userProfile.groups, groups] }
                })
            }
        })
    }
    const handleDestroyConnection = (id, handle) =>{
        destroyConnectionFromGroup({variables: 
            {groupId: id, handle: handle}
        })
    }
  
    const renderGroups = () =>{
        return data.userProfile.groups.map(group=>{
            
            return(
                <div className="groups-container">
                
                 <div className="group-title" >{group.title}</div>
                 
                 <button className="crud-button" onClick={()=>{handleDestroyGroup(group._id)}}>X</button>
                 <AddConnectionForm groupId={group._id}/>
                 <div className="group-connections-list">
                    {group.connections.map(connection=>{
                        return(
                            <div className="group-connections-container">
                            <p>{connection.name}
                                <span>
                                    <button className="crud-button" onClick={()=>{handleDestroyConnection(group._id, connection.handle)}}>X</button>
                                </span>
                            </p>
                            </div>
                        )
                    })}
                 </div>
                </div>
            )
        })
    }


return(<div className="landing-container">
    <div className="landing-title">
        <h4>Groups</h4>
        <GroupForm/>
        <AddConnection/>
    </div>
    <div className="group-main-container">
    {renderGroups()}

    </div>
    </div>
)

}
export default Landing