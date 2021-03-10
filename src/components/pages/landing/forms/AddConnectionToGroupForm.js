import React, {useState} from 'react'
import {useMutation, ApolloError} from '@apollo/client'
import {ADD_CONNECT_TO_GROUP} from "../../../../graphql/Mutations"

const AddConnectionToGroupForm = (props)=>{
    // console.log("this is props.groupId", props.groupId)
    const [formData, setFormData] = useState({
      handle: ''
    });
    
    const [addConnectionToGroup] = useMutation(ADD_CONNECT_TO_GROUP) 

    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent Form from Refreshing
      addConnectionToGroup({
        variables: {groupId: props.groupId, handle: formData.handle}
      });
    };
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  // console.log("This is AddConnectionToGroupForm formData", formData)
  
  return (
    <div className="add-connection-group-container">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Add an Existing Contact"
              className="add-connection-to-group-input"
              type="text"
              name="handle"
              value={formData.handle}
              onChange={handleChange}
            />
            
          </form>
          <button className="plus-button" type="submit" onClick={handleSubmit}>
              +
            </button>
        </div>
  );
}

export default AddConnectionToGroupForm