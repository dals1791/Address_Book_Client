import React, {useState} from 'react'
import {useLazyQuery} from '@apollo/client'
import {LOGIN} from '../../graphql/Queries'
import {saveToken} from '../../helpers/AuthToken'


const LoginForm = (props)=>{
    const [formData, setFormData] = useState({
      username: '', 
      password: ''
    });
    
    const  [login, {data}] = useLazyQuery(LOGIN, {variables: formData})
    if(data && data.login.token){
      saveToken(data.login.token)
      console.log(data.login.token)
    }
    
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>ERROR :(</p>;
  
      // , {variables: {username: formData.username, password: formData.password}}
    const handleSubmit = async (event) => {
      event.preventDefault(); // Prevent Form from Refreshing
     login()
     
     
    };
    
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
      
    };
    console.log("This is login formData", formData)
    return (
      <form>
          <input
            type="text"
            name="username"
            placeholder="Enter your Username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            className="password-bar"
            type="text"
            name="password"
            placeholder="Enter your Password"
            value={formData.password}
            onChange={handleChange}
          />
        <button
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    );
  };

export default LoginForm