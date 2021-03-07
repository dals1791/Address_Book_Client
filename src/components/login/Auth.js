import React, {useState} from 'react'
import LoginForm from "./LoginForm"
import RegisterForm from './RegisterForm'


const Auth = ()=>{
 const [toggle, setToggle] = useState(false)
 

    return (<>
    <div>{<LoginForm/>}</div>
    <div>{<RegisterForm/>}</div>
        
    
    </>)
}

export default Auth
