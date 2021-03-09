import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {CREATE_GROUP} from '../../../graphql/Mutations'
const GroupForm = (props)=>{
  const {handleToggleForm}=props
    const [formData, setFormData] = useState({
      name: '',
      
    });
    const [createGroup, {data}] = useMutation(CREATE_GROUP, {variables: formData})
    
    const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    createGroup()
  };
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  // console.log("This is Register formData", formData)
  return (
    <div >
      <h2>Welcome Aboard!</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            <button
              type="submit"
            >
              Register User
            </button>
          </form>
          
        </div>
  );
}

export default GroupForm