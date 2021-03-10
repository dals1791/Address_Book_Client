import {useHistory, Redirect} from 'react-router-dom'
import { client} from "../index"



const TOKEN='SignedToken'


export const saveToken = (token) => {
    localStorage.setItem(TOKEN, JSON.stringify(token))
}

export const getToken =  () =>{
    return JSON.parse(localStorage.getItem(TOKEN)) || ""
}

// export const signOut = ()=>{
//     localStorage.clear()
//     client.resetStore()
// }