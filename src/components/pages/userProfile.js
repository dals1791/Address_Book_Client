import React from 'react'
import {Link} from 'react-router-dom'
import Logout from '../logout/Logout'
import {useMutation, useQuery, gql} from '@apollo/client'
import{GET_CONTACT_INFO} from '../../graphql/Queries'


const UserProfile = (props) =>{
    const {handleLoginStatus, loggedIn} = props

    const {loading, error, data}= useQuery(GET_CONTACT_INFO)
    if (loading) return <p>Loading...</p>;
    if (error || data==null) return <p>Error :(</p>;
        const {name, handle, personalContact} = data.userProfile
console.log(data)
        const renderUserProfile = ()=>{
            return(
                <div>
                    <h3>User Information</h3>
                    <p>Name: {name} </p>
                    <p>Phone {personalContact.phone}</p>
                    <p>Email: {personalContact.email}</p>
                    <p>Address:</p>
                    <p>Street: {personalContact.street}</p>
                    <p>Apt. #: {personalContact.aptNum}</p>
                    <p>City: {personalContact.city}</p>
                    <p>State: {personalContact.state}</p>
                    <p>Zipcode: {personalContact.zipcode}</p>
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
    <Link to='/updateinfo'>
    <button>Update Information</button>
    </Link>
    
    
    
    </>
)

}
export default UserProfile