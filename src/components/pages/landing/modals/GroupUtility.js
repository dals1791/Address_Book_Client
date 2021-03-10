import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'


const GroupUtility =(props)=>{
    
    const render =() =>{
        if (props.transition.id===props.groupId && props.transition.transitionStatus){
            return(<>
            
            <button id="group-delete-button" className="crud-button" onClick={()=>{props.handleDestroyGroup(props.groupId)}}>
            <FontAwesomeIcon  className="group-trash-icon" style={{fontSize: "16px"}} icon={faTrash} /> 
            </button> 
           
            </>)
        }else{
            return null
        }
    }
    return(<>
       {render()}
       
        </>
    )
}
export default GroupUtility