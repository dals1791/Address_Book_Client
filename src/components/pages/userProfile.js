import React from 'react'
import {Link} from 'react-router-dom'

const UserProfile = () =>{
return(<>
    <div>UserProfile Component</div>
    <Link to="/" style={{ textDecoration: "none" }}>Login</Link>
    </>
)

}
export default UserProfile