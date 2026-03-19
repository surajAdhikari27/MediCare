import React from 'react'
import styles from './HistoryComponents.module.css'
import medicinePill from '../assets/images/medicinePill.png'

function HistoryMedicineCard({medicine}){

    return(
        <>
            <div className={styles.historyMedicineCard}>
                <div className={styles.logoBox}>
                    <img src={medicinePill} alt="icon"/>
                </div>

                <div className={styles.historyMedicineDetails}>
                    <h3>{medicine.medicineName}</h3>
                    <p>{medicine.dosage}</p>
                    <p>{medicine.reminderTime}</p>
                    <p>{medicine.isTaken ? "Taken" : "Missed"}</p>
                </div>

            </div>
        </>
    )
}

export default HistoryMedicineCard