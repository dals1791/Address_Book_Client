import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './nav.css'
const NavBar = ()=>{
    return (
        <div className="navbar-container">
            
            <div className="navbar-links-container">
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
            </div>
        </div>     
    )
   }
   
   export default NavBar