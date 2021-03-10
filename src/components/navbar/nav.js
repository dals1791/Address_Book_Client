import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faHouseUser, faUserCircle} from '@fortawesome/free-solid-svg-icons'

const NavBar = ()=>{
    return (
        <div className="navbar-container">
            
            <div className="navbar-links-container">
                <div>
                    <Link to="/landing" style={{ textDecoration: "none" }}>
                        <FontAwesomeIcon  className="nav-icon" style={{fontSize: "32px"}} icon={faHouseUser} />
                        <p>Groups</p>
                    </Link>
                </div>
                <div>
                    <Link to="/connections" style={{ textDecoration: "none" }}>
                        <FontAwesomeIcon  className="nav-icon" style={{fontSize: "32px"}} icon={faAddressBook} />
                        <p>Connections</p>
                    </Link>
                </div>
                <div>
                    <Link to="/userprofile" style={{ textDecoration: "none" }}>
                        <FontAwesomeIcon  className="nav-icon" style={{fontSize: "32px"}} icon={faUserCircle} />
                        <p>User Profile</p>
                    </Link>
                </div>
                    
                    

                    

            </div>
        </div>     
    )
   }
   
   export default NavBar