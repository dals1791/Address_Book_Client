import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {ADD_CONNECTION} from '../../../graphql/Mutations'
const AddConnection = (props)=>{
    const [formData, setFormData] = useState({
    handle: '',
      
    });
    const [addConnection] = useMutation(ADD_CONNECTION, {
        variables: formData})
    
    const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    addConnection();
      
    };
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  // console.log("This is Connection formData", formData)
  return (
    <div className="add-connection-form-container" >
          <form onSubmit={handleSubmit}>
            <input
            className="add-group-input"
              type="text"
              placeholder="new connection"
              name="handle"
              value={formData.handle}
              onChange={handleChange}
            />
            <button
              type="submit"
            >
              +
            </button>
          </form>
          
        </div>
  );
}

export default AddConnection