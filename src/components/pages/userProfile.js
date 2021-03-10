import React from 'react'
import {Link} from 'react-router-dom'
import Logout from '../logout/Logout'
import {useMutation, useQuery, gql} from '@apollo/client'
import{GET_USER_PROFILE} from '../../graphql/Queries'

const UserProfile = (props) =>{
    const {handleLoginStatus, loggedIn} = props

    const {loading, error, data}= useQuery(GET_USER_PROFILE)
    if (loading) return <p>Loading...</p>;
    if (error || data==null) return <p>Error :(</p>;
        const {name, handle, username, password, personalContact} = data.userProfile
console.log(data)
        const renderUserProfile = ()=>{
            return(
                <div>
                    <h3>User Information</h3>
                    <p>Name: {name} </p>
                    <p>Phone {personalContact.phone}</p>
                    <p>Email: {personalContact.email}</p>
                    <p>Address:</p>
                    <p>Street: {personalContact.address.street}</p>
                    <p>Apt. #: {personalContact.address.aptNum}</p>
                    <p>City: {personalContact.address.city}</p>
                    <p>State: {personalContact.address.state}</p>
                    <p>Zipcode: {personalContact.address.zipcode}</p>
                </div>
            )
        }

return(<>
    <header>
       <h2>Hi!  @{handle} </h2> 
    </header>
    <hr/>
    {renderUserProfile()}
    {loggedIn ? <Logout handleLoginStatus={handleLoginStatus}/> : <Link to="/" style={{ textDecoration: "none" }}>Login</Link> }
    
    
    
    </>
)

}
export default UserProfile