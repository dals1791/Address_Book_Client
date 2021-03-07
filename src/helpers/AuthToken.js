import React from 'react'

const TOKEN='SignedToken'

export const saveToken = (token) => {
    localStorage.setItem(TOKEN, JSON.stringify(token))
}

export const getToken = () =>{
    return JSON.parse(localStorage.getItem(TOKEN))
}

export const destroyToken = ()=>{
    localStorage.removeItem(TOKEN)
}