import React, {useState} from 'react'

const RegisterForm = (props)=>{
    const [formData, setFormData] = useState({});
    const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
  };
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  console.log("This is Register formData", formData)
  return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="userName"
            placeholder="Enter a Username"
            value={formData.userName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            placeholder="Enter a Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="text"
            name="handle"
            placeholder="Create a Unique Handle"
            value={formData.handle}
            onChange={handleChange}
          />
          <button
            className="register-button"
            type="submit"
          >
            Register User
          </button>
        </form>
  );
}

export default RegisterForm