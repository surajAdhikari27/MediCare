import React from 'react'
import styles from './MedicineList.module.css'
import {useNavigate} from 'react-router-dom'
import medicinePill from '../../assets/images/medicinePill.png'
import {faClock,faPenToSquare,faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import medicineDetails from '../../appwrite/MedicineCRUD'


function MedicineCard({medicine,refreshMedicines}){
    
    const navigate = useNavigate()

    const handleEdit=(e)=>{
        e.preventDefault()
        navigate(`/edit-medicine/${medicine.$id}`)
        refreshMedicines()
    }

    const handleDelete= async(e)=>{
        e.preventDefault()
        await medicineDetails.deleteDocument(medicine.$id)
        refreshMedicines()
    }

    const handleMarkTaken=async(e)=>{
        e.preventDefault()
        if(medicine.isTaken){
            return
        }
        await medicineDetails.updateDocument(medicine.$id, {
            isTaken: true,
            takenDate: new Date().toISOString()
        })
        refreshMedicines()
    }

    return(
        <>
            <div className={styles.medicineCard}>
                <div className={styles.pillLogo}>
                    <img src={medicinePill} alt="logo"/>
                </div>

                <div className={styles.medicineDetails}>
                    <h3>{medicine.medicineName}</h3>
                    <p>{medicine.dosage}</p>
                    <p>
                        <FontAwesomeIcon icon={faClock}/> 
                        {medicine.reminderTime}
                    </p>
                    <p>
                        {medicine.isTaken ? "Taken" : "Pending"}
                    </p>
                </div>

                <div className={styles.buttons}>
                    <button
                        className={styles.editMedicine}
                        type="button"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare}/>
                    </button>

                    <button
                        className={styles.deleteMedicine}
                        type="button"
                        onClick={handleDelete}
                    >
                        <FontAwesomeIcon icon={faTrashCan}/>
                    </button>

                    {!medicine.isTaken && (
                        <button
                            className={styles.markTaken}
                            onClick={handleMarkTaken}
                        >
                            Mark Taken
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default MedicineCard;