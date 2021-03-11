import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useMutation} from '@apollo/client'
import {CREATE_USER} from '../../graphql/Mutations'
const RegisterForm = (props)=>{
  let history = useHistory()
  const {handleToggleForm}=props
    const [formData, setFormData] = useState({
      name: '',
      username: '',
      password: '',
      handle: ''
    });
    const [createUser, {data}] = useMutation(CREATE_USER, {variables: formData})
    
    const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    createUser()
    handleToggleForm()
  };
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  // console.log("This is Register formData", formData)
  return (
    <div className="register-container">
      <h2>Welcome Aboard!</h2>
          <form className="form-container" onSubmit={handleSubmit}>
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Enter a Username"
              value={formData.userName}
              onChange={handleChange}
            />
            <input
              className="form-input"  
              type="text"
              name="password"
              placeholder="Enter a Password"
              value={formData.password}
              onChange={handleChange}
            />
            <small>Note: [Password must contain one Uppercase, Lowercase, symbol, and number!]</small>
            <input
              className="form-input"
              type="text"
              name="handle"
              placeholder="Create a Unique Handle"
              value={formData.handle}
              onChange={handleChange}
            />
            <div>
            <button
              className="form-button"
              type="submit"
            >
              Register User
            </button>
            <button className="form-button" onClick={handleToggleForm}>Back to Login</button>
            </div>
          </form>
          
        </div>
  );
}

export default RegisterForm