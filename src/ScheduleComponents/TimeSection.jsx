import React from 'react'
import styles from './ScheduleComponents.module.css'
import ScheduledMedicines from "./ScheduledMedicines"
import {faClock} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TimeSection({title, timeRange, medicines}){

    return(
        <>
        <div className={styles.timeSection}>
            <div className={styles.timeDetails}>
                <FontAwesomeIcon icon={faClock}/>
                <div className={styles.times}>
                    <p>{title}</p>
                    <p>{timeRange}</p>
                </div>
            </div>

            <div className={styles.scheduledMedicinesCards}>
                {medicines.length === 0 ? (
                    <p>No medicines scheduled for this time</p>
                ) : (
                    medicines.map((medicine) => (
                        <ScheduledMedicines
                            key={medicine.$id}
                            medicine={medicine}
                        />
                    ))
                )}
            </div>
        </div>
        </>
    )
}

export default TimeSection;