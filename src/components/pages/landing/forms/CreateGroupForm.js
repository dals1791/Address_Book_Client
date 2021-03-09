import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {CREATE_GROUP} from '../../../../graphql/Mutations'
import { GET_USER_PROFILE } from '../../../../graphql/Queries';
const GroupForm = (props)=>{
    const [formData, setFormData] = useState({
      title: '',
      
    });
    const [createGroup] = useMutation(CREATE_GROUP, {
        variables: formData ,
        update: (cache, mutationResult) => {
            console.log(cache)
          const newGroup= mutationResult.data.createGroup;
          const data = cache.readQuery({ 
            query: GET_USER_PROFILE, variables: {title: newGroup.title}
          }); 
          cache.writeQuery({
            query: GET_USER_PROFILE,
            variables: {title: newGroup.title},
            data: { userProfile: [...data.userProfile.groups, newGroup] }
          })
        }
        
      })
    
    const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    createGroup();
      
    };
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
//   console.log("This is GroupForm formData", formData)
  return (
    <div >
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
              +
            </button>
          </form>
          
        </div>
  );
}

export default GroupForm