import React, {useState} from 'react'
import LoginForm from "./LoginForm"
import RegisterForm from './RegisterForm'


const Auth = ()=>{
    const [toggleForm, setToggleForm] = useState(false)
    const handleToggleForm = () =>{
        setToggleForm(toggle=>!toggleForm)
    }

    return (<>
    <div className="userLogin_container">
    {toggleForm ? <RegisterForm handleToggleForm={handleToggleForm}/> : <LoginForm handleToggleForm={handleToggleForm}/>}
    
    </div>
    
    </>)
}

export default Auth
