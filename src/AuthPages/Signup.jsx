import React, {useState} from 'react'
import { useDispatch } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import AppwriteAuthService from "../appwrite/AppwriteAuth"
import {login} from "../store/AuthSlice"
import styles from './Signup.module.css'

function Signup(){
    const dispatch= useDispatch()
    const navigate= useNavigate()

    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [error, setError]= useState("")
    const [loading, setLoading]= useState(false)

    const handleSignup=async(e)=>{
        e.preventDefault()
        setError("")
        setLoading(true)
        
        try{
            await AppwriteAuthService.createAccount({
                emailID: email,
                password,
                name
            })

            const user= await AppwriteAuthService.getCurrentUser()
            dispatch(login(user))
            navigate("/dashboard")
        }
        catch(error){
            console.log("Error in creating account :: ",error)

            if(error.code === 409){
                setError("User already exists. Please login instead.")
            }
            else{
                setError("Something went wrong. Try again.")
            }
        }
        finally{
            setLoading(false)
        }
    }

    return(
        <>
        <form className={styles.signupForm} onSubmit={handleSignup}>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit" disabled={loading}>
                {loading?"Signing up" : "Signup"}
            </button>

            <p>Already have an account? <Link to="/login" className={styles.link}>Login</Link></p>
        </form>
        </>
    )
}

export default Signup