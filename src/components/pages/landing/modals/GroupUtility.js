import React, {useState} from 'react';
import AddConnectionForm from '../forms/AddConnectionToGroupForm'


const GroupUtility =(props)=>{
    console.log(props.toggle)
    const render =() =>{
        if (props.transition.id===props.groupId && props.transition.transitionStatus){
            return(<>
            
            <button id="group-delete-button" className="crud-button" onClick={()=>{props.handleDestroyGroup(props.groupId)}}>X</button> 
            <AddConnectionForm groupId={props.groupId}/>
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