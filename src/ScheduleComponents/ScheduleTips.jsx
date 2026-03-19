import React from 'react'
import styles from './ScheduleComponents.module.css'

function ScheduleTips(){

    return(
        <>
        <div className={styles.scheduleTips}>
            <h3>Schedule Tips</h3>
            <ul>
                <li>Set alarms or reminders for each medicine time</li>
                <li>Take medicines with food if prescribed</li>
                <li>Keep medicines organized in a pill organizer</li>
                <li>Mark medicines as taken immediately after consumption</li>
            </ul>
        </div>
        </>
    )
}

export default ScheduleTips;