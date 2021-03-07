import React, {useState} from 'react'
import {useLazyQuery} from '@apollo/client'
import {LOGIN} from '../../graphql/Queries'


const LoginForm = (props)=>{
    const [formData, setFormData] = useState({
      username: '', 
      password: ''
    });
    
    const  [login, {data}] = useLazyQuery(LOGIN, {variables: formData})
    console.log(data)
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>ERROR :(</p>;
  
      // , {variables: {username: formData.username, password: formData.password}}
    const handleSubmit = (event) => {
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