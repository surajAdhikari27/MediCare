import React from 'react'
import calenderIcon from '../../assets/images/calenderIcon.png'
import styles from './MedicineStatsBar.module.css'

function MedicineStatsBar({medicines}){

    const total= medicines.length
    const taken= medicines.filter((medicine)=>medicine.isTaken).length
    const pending= total-taken

    return(
        <>
        <div className={styles.statsBar}>
            <div className={styles.todaysTotal}>
                <img src={calenderIcon} alt="icon"/>
                <div className={styles.todaysDetails}>
                    <p>Today's Total</p>
                    <p>{total}</p>
                </div>
            </div>

            <div className={styles.taken}>
                <img src={calenderIcon} alt="icon"/>
                <div className={styles.takenDetails}>
                    <p>Taken</p>
                    <p>{taken}</p>
                </div>
            </div>

            <div className={styles.pending}>
                <img src={calenderIcon} alt="icon"/>
                <div className={styles.pendingDetails}>
                    <p>Pending</p>
                    <p>{pending}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default MedicineStatsBar;