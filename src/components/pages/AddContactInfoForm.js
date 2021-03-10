import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {Add_CONTACT_INFO} from '../../graphql/Mutations'

const AddContactInfoForm = (props)=>{
  
    const [formData, setFormData] = useState({
      phone: '',
      email: '',
      street: '',
      aptNum: '',
      city: '',
      state: '',
      zipcode: '',
    });

    const [addContactInfo, {data}] = useMutation(ADD_CONTACT_INFO, {variables: formData})
    console.log("THis is data for contact info", data)
    
    const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    addContactInfo()
  };
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  // console.log("This is Register formData", formData)
  return (
    <div className="register-container">
      <h2>UPdate Form</h2>
          <form className="form-container" onSubmit={handleSubmit}>
            <input
              className="form-input"
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              className="form-input"
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="form-input"  
              type="text"
              name="street"
              placeholder="Street"
              value={formData.street}
              onChange={handleChange}
            />
            <input
              className="form-input"
              type="text"
              name="aptNum"
              placeholder="Apt #"
              value={formData.aptNum}
              onChange={handleChange}
            />
            <input
              className="form-input"
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            <input
              className="form-input"
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
            />
            <input
              className="form-input"
              type="text"
              name="zipcode"
              placeholder="Zipcode"
              value={formData.zipcode}
              onChange={handleChange}
            />
            <div>
            <button
              className="form-button"
              type="submit"
            >
              Register User
            </button>
            <button className="form-button" onClick={handleToggleForm}>Update</button>
            </div>
          </form>
          
        </div>
  );
}

export default AddContactInfoForm