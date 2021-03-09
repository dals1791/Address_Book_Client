import React from 'react'
import './landing.css'
import {useMutation, useQuery, gql} from '@apollo/client'
import{GET_USER_PROFILE} from '../../../graphql/Queries'
import {DESTROY_GROUP} from '../../../graphql/Mutations'
import GroupForm from './GroupForm'
const Landing = () =>{
    const stuff= useQuery(GET_USER_PROFILE)
    console.log(stuff)
    const {loading, error, data, refetch}= useQuery(GET_USER_PROFILE)
    const [destroyGroup] = useMutation(DESTROY_GROUP)
        console.log("this is query data", data)
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
    
    const handleDestroyGroup = (id) =>{
        // console.log("This is the groupId", id)
        // console.log("this is user _id", data.userProfile._id)
        destroyGroup({ variables: { groupId: id }, 
            update: cache => {
              let groups = [...cache.readQuery({ query: GET_USER_PROFILE}).userProfile.groups];
              console.log("This is the cache data",data)
              groups = groups.filter(({id: groupId}) => groupId !== id);
              console.log("this is groups", groups)
              cache.writeQuery({ 
                  query: GET_USER_PROFILE, 
                  data: { userProfile: [...data.userProfile.groups, groups] }
                })
            }
        })
    }
        
            
    

    
    const renderGroups = () =>{
        return data.userProfile.groups.map(group=>{
            return(
                <>
                
                 <div className="group-title" onClick={()=>{handleDestroyGroup(group._id)}}>{group.title}</div>
                 <button>X</button>
                 <div className="group-connections-list">
                    {group.connections.map(connection=>{
                        return(
                            <>
                            {connection.name}
                            {connection.handle}
                            </>
                        )
                    })}
                 </div>
                </>
            )
        })
    }


return(<div className="landing-container">
    <div className="landing-title">
        <h4>Groups</h4>
        <GroupForm/>
    </div>
    <div className="group-container">
    {renderGroups()}

    </div>
    </div>
)

}
export default Landing