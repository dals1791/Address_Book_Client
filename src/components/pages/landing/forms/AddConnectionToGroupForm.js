import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {ADD_CONNECT_TO_GROUP} from "../../../../graphql/Mutations"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'

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
  
  return (<>
    <div className="add-connection-group-container">
          <form className="add-connection-group-form" onSubmit={handleSubmit}>
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
          <FontAwesomeIcon  className="contact-plus-icon" style={{fontSize: "16px"}} icon={faPlus} />
            </button>
            
        </div>
        <small>Search by your connections unique handle</small>
        </>
  );
}

export default AddConnectionToGroupForm