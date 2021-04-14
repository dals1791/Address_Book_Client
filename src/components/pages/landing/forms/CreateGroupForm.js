import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_GROUP } from "../../../../graphql/Mutations";
import { GET_USER_PROFILE } from "../../../../graphql/Queries";
const GroupForm = (props) => {
  const [formData, setFormData] = useState({
    title: "",
  });
  const [createGroup] = useMutation(CREATE_GROUP, {
    variables: formData,
    update: (cache, mutationResult) => {
      
      const newGroup = mutationResult.data.createGroup;
      const data = cache.readQuery({
        query: GET_USER_PROFILE,
        variables: { title: newGroup.title },
      });
      cache.writeQuery({
        query: GET_USER_PROFILE,
        variables: { title: newGroup.title },
        data: { userProfile: [...data.userProfile.groups, newGroup] },
      });
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    createGroup();
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form className="create-group-form" onSubmit={handleSubmit}>
      <input
        className=" create-group-input"
        type="text"
        name="title"
        placeholder="Add a Group Title"
        value={formData.title}
        onChange={handleChange}
      />
      <button className="group-submit-button" type="submit">
        Create
      </button>
    </form>
  );
};

export default GroupForm;
