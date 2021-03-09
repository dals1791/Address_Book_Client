import React from 'react'
import './landing.css'
import {useMutation, useQuery} from '@apollo/client'
import{GET_USER_PROFILE} from '../../../graphql/Queries'
import {DESTROY_GROUP} from '../../../graphql/Mutations'
import GroupForm from './GroupForm'
const Landing = () =>{

    const {loading, error, data}= useQuery(GET_USER_PROFILE)
    const [destroyGroup] = useMutation(DESTROY_GROUP)
        
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
    
    const handleDestroyGroup = (id) =>{
        console.log("This is the groupId", id)
        destroyGroup({
            variables: { id}})
            // update(cache) {
            // cache.modify({
            //     fields: {
            //     userProfile(existingUserProfileRefs, { readField }) {
            //         return existingUserProfileRefs.filter(
            //         UserProfileRef => id !== readField('_id', UserProfileRef),
            //         );
            //     },
            //     },
            // });
            // },
            // return (...userProfile)
        // });
    };

    
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