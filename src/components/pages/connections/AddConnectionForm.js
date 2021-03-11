import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {ADD_CONNECTION} from '../../../graphql/Mutations'
import {GET_CONNECTIONS} from '../../../graphql/Queries'
const AddConnection = (props)=>{
    const [formData, setFormData] = useState({
    handle: '',
      
    });
    const [addConnection] = useMutation(ADD_CONNECTION, {
        variables: formData,
        update: (cache, mutationResult) => {
          // console.log(cache)
        const newConnection= mutationResult.data.addConnection;
        const data = cache.readQuery({ 
          query: GET_CONNECTIONS, variables: {connections: newConnection.personalContact}
        }); 
        cache.writeQuery({
          query: GET_CONNECTIONS,
          variables: {connections: newConnection.personalContact},
          data: { userProfile: [...data.userProfile.connections, newConnection] }
        })
      }
      
      
      
      
      
      
      })
    




    const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    addConnection();
      
    };
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  // console.log("This is Connection formData", formData)
  return (
    <div className="create-group-form" >
          <form onSubmit={handleSubmit}>
            <input
            className=" create-group-input"
              type="text"
              placeholder="Find a new Connection"
              name="handle"
              value={formData.handle}
              onChange={handleChange}
            />
            <button
            className="group-submit-button"
              type="submit"
            >
              Connect
            </button>
          </form>
          
        </div>
  );
}

export default AddConnection