import React from 'react'
import styles from './ScheduleComponents.module.css'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ScheduledMedicines({medicine}){

    return(
        <>
        <div className={styles.scheduledMedicines}>
            <div className={styles.reminderTime}>
                <FontAwesomeIcon icon={faClock}/>
                <span>{medicine.reminderTime}</span>
            </div>

            <div className={styles.medicineDetails}>
                <span>{medicine.medicineName}</span>
                <span>{medicine.dosage}</span>
            </div>

            {medicine.isTaken && (
                <span className={styles.takenBadge}>Taken</span>
            )}
        </div>
        </>
    )
}

export default ScheduledMedicines;