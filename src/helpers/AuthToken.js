import {useHistory, Redirect} from 'react-router-dom'
import { useApolloClient} from '@apollo/client'


const TOKEN='SignedToken'


export const saveToken = (token) => {
    localStorage.setItem(TOKEN, JSON.stringify(token))
}

export const getToken =  () =>{
    return JSON.parse(localStorage.getItem(TOKEN)) || ""
}

export const SignOut = async ()=>{
    const client = useApolloClient()
    localStorage.removeItem(TOKEN)
    client.resetStore()
    return <Redirect to="/"/>
}