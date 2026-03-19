import React from 'react'
import styles from './HistoryComponents.module.css'

function HistoryHeader(){
    return(
        <>
        <div className={styles.historyDetails}>
            <h1>Medicine History</h1>
            <p>Track your medication adherence over time</p>
        </div>
        </>
    )
}

export default HistoryHeader;