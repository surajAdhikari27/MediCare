import React, {useState} from 'react'
import { useDispatch } from "react-redux"
import { useNavigate, Link} from "react-router-dom"
import AppwriteAuthService from "../appwrite/AppwriteAuth"
import {login} from "../store/AuthSlice"
import styles from './Login.module.css'

function Login(){
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [error, setError]= useState("")
    const [loading, setLoading]= useState(false)

    const dispatch= useDispatch()
    const navigate= useNavigate()

    const handleLogin=async(e)=>{
        e.preventDefault()
        setError("")
        setLoading(true)

        try{
            await AppwriteAuthService.login(
                {email,
                password}
            )

            const user= await AppwriteAuthService.getCurrentUser()
            dispatch(login(user))
            navigate("/dashboard")
        }
        catch(error){
            console.log("Error in login :: ", error)

            if(error.code==401){
                setError("Account does not exists or incorrect password!")
            }
            else{
                setError("Something went wrong. Please try again")
            }
        }
        finally{
            setLoading(false)
        }
    }

    return(
        <>
        <form className={styles.loginForm} onSubmit={handleLogin}>
            {error && <p style={{ color: "red" }}>{error}</p>}
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
                {loading ? "Logging in..." : "Login"}
            </button>
            <p>Don't have an account? <Link to="/signup" className={styles.link}>Signup</Link></p>
        </form>
        </>
    )
}

export default Login

