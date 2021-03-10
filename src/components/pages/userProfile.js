import React from 'react'
import {Link} from 'react-router-dom'
import Logout from '../logout/Logout'

const UserProfile = (props) =>{
    const {handleLoginStatus} = props
return(<>
    <div>UserProfile Component</div>
    <Link to="/" style={{ textDecoration: "none" }}>Login</Link>
    <Logout handleLoginStatus={handleLoginStatus}/>
    
    </>
)

}
export default UserProfile