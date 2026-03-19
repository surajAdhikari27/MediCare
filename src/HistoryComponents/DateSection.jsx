import React from 'react'
import styles from './HistoryComponents.module.css'
import HistoryMedicineCard from "./HistoryMedicineCard"

function DateSection({date, medicines}){

    return(
        <>
        <div className={styles.dateSection}>
            <h3>{date}</h3>

            {medicines.map((medicine)=>(
                <HistoryMedicineCard
                    key={medicine.$id} 
                    medicine={medicine}
                />
            ))}
        </div>
        </>
    ) 
}

export default DateSection