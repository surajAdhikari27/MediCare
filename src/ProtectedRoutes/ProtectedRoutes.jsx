import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import React from 'react'

function ProtectedRoutes({children}){
    const authStatus= useSelector((state)=>state.status)

    if(!authStatus){
        return <Navigate to="/login"/>
    }
    return children
}

export default ProtectedRoutes