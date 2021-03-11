import React, {useState} from 'react'
import {useHistory}from 'react-router-dom'
import {useMutation} from '@apollo/client'
import {ADD_CONTACT_INFO} from '../../graphql/Mutations'
import {GET_CONTACT_INFO} from "../../graphql/Queries"

const AddContactInfoForm = (props)=>{
    let history = useHistory()
    const [formData, setFormData] = useState({
      phone: '',
      email: '',
      street: '',
      aptNum: '',
      city: '',
      state: '',
      zipcode: '',
    });

    const [addContactInfo, {data}] = useMutation(ADD_CONTACT_INFO)
    console.log("THis is data for contact info", data)
    
    const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    addContactInfo( {
        variables: formData,
        update: (cache, mutationResult) => {
            // console.log(mutationResult)
          const newContactInfo= mutationResult.data.addContactInfo;
          const data = cache.readQuery({ 
            query: GET_CONTACT_INFO, variables: {personalContact: newContactInfo}
          }); 
          cache.writeQuery({
            query: GET_CONTACT_INFO,
            variables: {personalContact: newContactInfo},
            data: { userProfile: data.userProfile.personalContact, newContactInfo }
          })
        }
    })
    history.push('/userprofile')
  };
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  console.log("This is contactInfo formData", formData)
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
             Update
            </button>
            
            </div>
          </form>
          
        </div>
  );
}

export default AddContactInfoForm