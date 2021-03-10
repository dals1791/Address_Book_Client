import React, {useState} from 'react'
import {useLazyQuery, client} from '@apollo/client'
import {LOGIN} from '../../graphql/Queries'
import {saveToken, logout} from '../../authentication/AuthToken'


const LoginForm = (props)=>{
  const {handleToggleForm, handleLoginStatus}= props
    const [formData, setFormData] = useState({
      username: '', 
      password: ''
    });
    
    const  [login, {data}] = useLazyQuery(LOGIN, {variables: formData})
    if(data && data.login.token){
      saveToken(data.login.token)
    }
    
  
    const handleSubmit = async (event) => {
      event.preventDefault(); // Prevent Form from Refreshing
     login()
     
     
    };
    
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
      
    };
    
    
    return (
    
      <div className="login-container">
        <h2>Welcome Back!</h2>
        <form className="form-container" onSubmit={handleSubmit}>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Enter your Username"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              className="form-input"
              type="text"
              name="password"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
            />
          <button
            className="form-button"
            type="submit"
            onClick={()=>{handleLoginStatus(true)}}
          >
            Login
          </button>
        </form>
      
      <p onClick={handleToggleForm}>New User? Click here to create a new account</p>
      
      </div>
      
    );
  };

export default LoginForm