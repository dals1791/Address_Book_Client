import React, {useState} from 'react'
import LoginForm from "./LoginForm"
import RegisterForm from './RegisterForm'
import TopBar from '../topbar/Topbar'
import './auth.css'


const Auth = ()=>{
    const [toggleForm, setToggleForm] = useState(false)
    const handleToggleForm = () =>{
        setToggleForm(toggle=>!toggleForm)
    }

    return (<>
    <div className="userLogin_container">
        <header>
            <TopBar/>
        </header>
        <hr/>
    {toggleForm ? <RegisterForm handleToggleForm={handleToggleForm}/> : <LoginForm handleToggleForm={handleToggleForm}/>}
    
    </div>
    
    </>)
}

export default Auth
