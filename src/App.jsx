import { useEffect } from 'react'
import './App.css'
import React from 'react'
import { useDispatch } from "react-redux"
import { login, logout } from "./store/AuthSlice"
import AppwriteAuthService from "./appwrite/AppwriteAuth"
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Schedule from './Pages/Schedule'
import History from './Pages/History'
import Login from './AuthPages/Login'
import Signup from './AuthPages/Signup'
import Navbar from './Components/Navbar/Navbar'
import AddMedicine from "./Components/AddMedicine"
import EditMedicine from "./Components/EditMedicine"
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes'
import { Routes, Route } from "react-router-dom"


function App() {
  const dispatch= useDispatch()
  const checkUser=async()=>{

    try{
      const user= await AppwriteAuthService.getCurrentUser()
      if(user){
        dispatch(login(user))
      }
      else{
        dispatch(logout(user))
      }
    }
    catch(error){
      dispatch(logout(user))
    }
  }

  useEffect(()=>{
    checkUser()
  },[])

  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/schedule"
          element={
            <ProtectedRoutes>
              <Schedule />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/history"
          element={
            <ProtectedRoutes>
              <History />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/edit-medicine/:id"
          element={
            <ProtectedRoutes>
              <EditMedicine />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/add-medicine"
          element={
            <ProtectedRoutes>
              <AddMedicine />
            </ProtectedRoutes>
          }
        />

      </Routes>
    </>
  )
}

export default App
