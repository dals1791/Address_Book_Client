import React from 'react'

import {ApolloConsumer} from "@apollo/client"
import {Redirect, useHistory} from 'react-router-dom'
import {signOut}from '../../authentication/AuthToken'
import { client} from "../../index"

const Logout =(props) =>{
  let history = useHistory()
 const signout=()=>{
    
    
    // props.handleLoginStatus()
    history.push('/')
    localStorage.clear()
    client.resetStore()

 }
   return (<>
   <button  className="form-button" onClick={signout}>logout</button>
   
   </>)

   
}

export default Logout