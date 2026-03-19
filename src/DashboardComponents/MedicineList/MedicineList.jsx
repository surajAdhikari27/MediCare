import React from 'react'
import styles from './MedicineList.module.css'
import MedicineCard from './MedicineCard'


function MedicineList({medicines, refreshMedicines}){

    return(
        <>
        <div className={styles.medicineList}>
            {medicines.map((medicine)=>(
                <MedicineCard 
                    key={medicine.$id}
                    medicine={medicine}
                    refreshMedicines={refreshMedicines}
                />
            ))}
        </div>
        </>
    )
}

export default MedicineList;