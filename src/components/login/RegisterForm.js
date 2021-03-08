import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {CREATE_USER} from '../../graphql/Mutations'
const RegisterForm = (props)=>{
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
  };
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  // console.log("This is Register formData", formData)
  return (
    <div className="register_container">
          <form className=" register_form_container" onSubmit={handleSubmit}>
            <input
              className="form_input"
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="form_input"
              type="text"
              name="username"
              placeholder="Enter a Username"
              value={formData.userName}
              onChange={handleChange}
            />
            <input
              className="form_input"  
              type="text"
              name="password"
              placeholder="Enter a Password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              className="form_input"
              type="text"
              name="handle"
              placeholder="Create a Unique Handle"
              value={formData.handle}
              onChange={handleChange}
            />
            <button
              className="form_button"
              type="submit"
            >
              Register User
            </button>
          </form>
          <button className="form_button" onClick={handleToggleForm}>Back to Login</button>
        </div>
  );
}

export default RegisterForm