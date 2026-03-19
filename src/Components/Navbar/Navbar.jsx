import styles from "./Navbar.module.css";
import React from 'react'
import {NavLink} from 'react-router-dom'
import medCare from '../../assets/images/medCareIcon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux"
import { logout } from "../../store/AuthSlice"
import { useNavigate } from "react-router-dom"
import AppwriteAuthService from '../../appwrite/AppwriteAuth'


function Navbar(){
    const navigate= useNavigate()
    const dispatch= useDispatch()

    const handleLogout = async () => {
        if(!window.confirm("Do you want to logout?")) return
        await AppwriteAuthService.logout()
        dispatch(logout())
        navigate("/login")
}

    return(
        <>
        <nav className={styles.navBar}>
            <div className={styles.navContainer}>
                <div className={styles.logos}>
                    <img src={medCare} alt="MedCareLogo"/>
                    <p>MedCare</p>
                </div>

                <div className={styles.navigations}>
                    <NavLink 
                        to="/" 
                        className={({isActive}) => isActive ? styles.active : ""}
                        >
                        Home
                    </NavLink>

                    <NavLink 
                        to="/dashboard" 
                        className={({isActive}) => isActive ? styles.active : ""}
                    >
                        Dashboard
                    </NavLink>

                    <NavLink 
                        to="/schedule" 
                        className={({isActive}) => isActive ? styles.active : ""}
                    >
                        Schedule
                    </NavLink>

                    <NavLink 
                        to="/history" 
                        className={({isActive}) => isActive ? styles.active : ""}
                    >
                        History
                    </NavLink>

                    <button type="button" onClick={handleLogout} className={styles.button}>
                        <FontAwesomeIcon icon={faPowerOff}/>
                    </button>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;