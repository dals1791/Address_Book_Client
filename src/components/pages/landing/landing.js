import React, {useState, useEffect} from 'react'
import './landing.css'
import {useMutation, useQuery, gql} from '@apollo/client'
import{GET_USER_PROFILE} from '../../../graphql/Queries'
import {DESTROY_GROUP, DESTROY_CONNECT_FROM_GROUP} from '../../../graphql/Mutations'
import GroupForm from './forms/CreateGroupForm'
import AddConnectionToGroupForm from './forms/AddConnectionToGroupForm'

import GroupUtility from './modals/GroupUtility'

const Landing = () =>{
    // state for handling Group Title Transition
    let widthStart ="100%"
    const [transition, setTransition] = useState({
        width: widthStart,
        id: null,
        transitionStatus: false
    })
    
// GRAPHQL HOOKS ***********************************************************
    const {loading, error, data}= useQuery(GET_USER_PROFILE)
    const [destroyGroup] = useMutation(DESTROY_GROUP)
    const [destroyConnectionFromGroup] = useMutation(DESTROY_CONNECT_FROM_GROUP)
    // console. log("this is query data", data)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
// ***********************************************************
// Handlers for GRAPHQL HOOKS***********************************************************
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
// ***********************************************************
// Main Render Function for Groups *****************************
    const renderGroups = () =>{
        return data.userProfile.groups.map(group=>{
            
            return(
                <div key={group._id} className="groups-container">
                    <div>
                    <div 
                        className="group-title-container" 
                        style={{
                            width: (group._id===transition.id ? transition.width: widthStart), 
                            transition: "width .5s linear"
                        }} 
                        onClick={()=>{handleGroupTransition(group._id)}}>
                        
                            <h3 className="group-title"
                            >{group.title}</h3>

                            <GroupUtility groupId={group._id} handleDestroyGroup={handleDestroyGroup} transition={transition}/>

                            
                        
                    </div>
                    {transition.id===group._id && transition.transitionStatus?<AddConnectionToGroupForm groupId={group._id}/> : null}
                    </div>
                    
                    
                    
                    
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
// ***********************************************************
// HELPER FUNCTIONS ****************************************

const handleGroupTransition = (id)=>{
    
    let newWidth = transition.width === widthStart ? "195%": widthStart
    let newTransitionStatus = newWidth===widthStart? false : true
    setTransition({
    width: newWidth,
    id: id, 
    transitionStatus: newTransitionStatus
    

   })

}

// ***********************************************************

return(<div className="landing-container">
    <div className="landing-title">
        <h4>Groups</h4>
        <GroupForm/>
    </div>
    <div className="group-main-container">
    {renderGroups()}

    </div>
    </div>
)

}
export default Landing