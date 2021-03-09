import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './topbar.css'
const Topbar = ()=>{
    return (
        <div className="topbar-container">
            <h1>Address Book</h1>
            {/* <div className="navbar-links-container">
                <ul style={{listStyleType: "none"}}> 
                    <Link to="/landing" style={{ textDecoration: "none" }}>
                    <li>Landing</li>
                    </Link>
                    <Link to="/connections" style={{ textDecoration: "none" }}>
                    <li>Connections</li>
                    </Link>

                    <Link to="/userprofile" style={{ textDecoration: "none" }}>
                    <li>UserProfile</li>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }}>
                    <li>Login</li>
                    </Link>
                </ul>
            </div> */}
        </div>     
    )
   }
   
   export default Topbar