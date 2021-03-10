import React from 'react'

import {ApolloConsumer} from "@apollo/client"
import {Redirect} from 'react-router-dom'
import {SignOut}from '../../helpers/AuthToken'

const Logout =() =>{
 const signout=()=>{
     return <SignOut/>
 }
   return (<>
   <button  className="form-button" onClick={signout}>logout</button>
   
   </>)

   
}

export default Logout