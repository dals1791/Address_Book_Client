import React, {useState} from 'react'
import {useQuery} from "@apollo/client"
import {GET_CONTACT_INFO} from '../graphql/Queries'


const Address = ()=>{
    const {loading, error, data}= useQuery(GET_CONTACT_INFO)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
        const {name, handle, personalContact}= data.userProfile
    return (
        <div className="address-container">
            <p>Name: {name} </p>
            <p>Phone: {personalContact.phone}</p>
            <p>Email: {personalContact.email}</p>
            <p>Street: {personalContact.street}</p>
            <p>Apt. #: {personalContact.aptNum}</p>
            <p>City: {personalContact.city}</p>
            <p>State: {personalContact.state}</p>
            <p>Zipcode: {personalContact.zipcode}</p>
        </div>
        
    )
}

export default Address