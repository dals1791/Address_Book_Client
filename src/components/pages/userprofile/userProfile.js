import React from 'react'
import {Link} from 'react-router-dom'
import Logout from '../../logout/Logout'
import {useQuery} from '@apollo/client'
import{GET_CONTACT_INFO} from '../../../graphql/Queries'
import './userprofile.css'


const UserProfile = (props) =>{
    const {handleLoginStatus, loggedIn} = props

    const {loading, error, data}= useQuery(GET_CONTACT_INFO)
    if (loading) return <p>Loading...</p>;
    if (error || data==null) return <p>Error :(</p>;
        
    const {name, handle, personalContact} = data.userProfile
//      console.log(data)
    const renderUserProfile = ()=>{
        return(
            <div className="contact-info-container">
                <h3>User Information</h3>
                <p>Name: {name} </p>
                <p>Phone: {personalContact.phone}</p>
                <p>Email: {personalContact.email}</p>
                
                <div className="address-container">
                    <h4>Address:</h4>
                    <p>Street: {personalContact.street}</p>
                    <p>Apt. #: {personalContact.aptNum}</p>
                    <p>City: {personalContact.city}</p>
                    <p>State: {personalContact.state}</p>
                    <p>Zipcode: {personalContact.zipcode}</p>
                </div>
            </div>
            )
        }

return(<>
    <header className="user-profile-header-container">
       <h2>Hi!  @{handle} </h2> 
    </header>
    <div classname="user-profile-body-container">
        {renderUserProfile()}
        <div className="user-profile-footer">
            <Link style={{textDecoration: "none"}} to='/updateinfo'>
                <button className="logout-button">Update Information
                <span>
                    >
                </span>
                </button>
            </Link>
            {loggedIn ? <Logout handleLoginStatus={handleLoginStatus}/> : <Link to="/" style={{ textDecoration: "none" }} className="logout-button">Login</Link> }
        </div>
    </div>
    
    
    
    </>
)

}
export default UserProfile