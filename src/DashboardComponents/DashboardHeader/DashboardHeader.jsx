import React from 'react'
import {useNavigate} from 'react-router-dom'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './DashboardHeader.module.css'

function DashboardHeader(){
    const navigate= useNavigate()

    const addMedicine=(e)=>{
        e.preventDefault()
        navigate("/add-medicine")
    }

    return(
        <>
        <div className={styles.dashboardHeader}>
            <div className={styles.currentDate}>
                <h1>Today's Medicine</h1>
                <p>{new Date().toDateString()}</p>
            </div>

            <button type="button" onClick={addMedicine} className={styles.addBtn}>
                <FontAwesomeIcon icon={faPlus}/>
                Add Medicine
            </button>
        </div>
        </>
    )
}

export default DashboardHeader;