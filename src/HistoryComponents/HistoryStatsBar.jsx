import React from 'react'
import styles from "./HistoryComponents.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowTrendUp, faCircleCheck, faCircleXmark} from '@fortawesome/free-solid-svg-icons'

function HistoryStatsBar({medicines}){
    const safeMedicines = Array.isArray(medicines) ? medicines : []
    const total= safeMedicines?.length || 0
    const taken= safeMedicines?.filter((medicine)=>medicine.isTaken).length ||0
    const missed= total-taken
    const adherenceRate= total>0? Math.round((taken/total)*100):0
    return(
        <>
            <div className={styles.historyStatsBar}>
                <div className={styles.adherenceCard}>
                    <FontAwesomeIcon icon={faArrowTrendUp}/>
                    <div className={styles.adherenceDetails}>
                        <p>Adherence Rate</p>
                        <p>{adherenceRate}%</p>
                    </div>
                </div>

                <div className={styles.takenCard}>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <div className={styles.takenDetails}>
                        <p>Taken</p>
                        <p>{taken}</p>
                    </div>
                </div>

                <div className={styles.missedCard}>
                    <FontAwesomeIcon icon={faCircleXmark}/>
                    <div className={styles.missedDetails}>
                        <p>Missed</p>
                        <p>{missed}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HistoryStatsBar;