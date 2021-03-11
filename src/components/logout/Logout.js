import React from 'react'
import {useHistory} from 'react-router-dom'
import { client} from "../../index"

const Logout =(props) =>{
  let history = useHistory()
 const signout=()=>{

    localStorage.clear()
    client.clearStore()
    history.push('/')

 }
   return (<>
   <button  className="logout-button" onClick={signout}>Logout
      <span>
         >
      </span>
   </button>
   
   </>)

   
}

export default Logout