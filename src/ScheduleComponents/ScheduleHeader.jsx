import React from 'react'
import styles from './ScheduleComponents.module.css'

function ScheduleHeader(){
    
    const TodayDate= new Date().toDateString()
    return(
        <>
        <div className={styles.scheduleHeader}>
            <h1>Daily Schedule</h1>
            <p>Your medicine schedule for {TodayDate}</p>
        </div>
        </>
    )
}

export default ScheduleHeader;