import React from 'react'
import './landing.css'
import {useMutation, useQuery} from '@apollo/client'
import{GET_USER_PROFILE} from '../../../graphql/Queries'
import GroupForm from './GroupForm'
const Landing = () =>{

    const {loading, error, data}= useQuery(GET_USER_PROFILE)
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
    
    
    const renderGroups = () =>{
        return data.userProfile.groups.map(group=>{
            return(
                <>
                
                 <div className="group-title">{group.title}</div>
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
    <div className="landing-title">Groups</div>
    <div className="group-container">
    {renderGroups()}
    </div>
    </div>
)

}
export default Landing