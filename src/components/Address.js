import React, {useState} from 'react'

const Address = (props)=>{
    const {id} = props
    console.log(id)

   const render = () =>{
       return props.data.userProfile.connections.map((connection)=>{
        if(id===connection._id){
           return(<>
               
                 <div className="address-container2">
                     <div className="contact">
                        <p>Name: {connection.name} </p>
                        <p>Handle: {connection.handle}</p>
                        <p>Phone: {connection.personalContact.phone}</p>
                        <p>Email: {connection.personalContact.email}</p>
                    </div>
                    <div className="address">
                        <p>Street: {connection.personalContact.street}</p>
                        <p>Apt. #: {connection.personalContact.aptNum}</p>
                        <p>City: {connection.personalContact.city}</p>
                        <p>State: {connection.personalContact.state}</p>
                        <p>Zipcode: {connection.personalContact.zipcode}</p>
                    </div>
                 </div>
                     
                 </>
           )}}
        )

    }
       
    return (
<>  
        <button className="contact-close" onClick= {props.handleAddress}>X</button>
        {render()}
       
   </>
    )
}

export default Address