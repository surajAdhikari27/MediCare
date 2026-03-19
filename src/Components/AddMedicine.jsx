import medicineDetails from '../appwrite/MedicineCRUD'
import AppwriteAuthService from '../appwrite/AppwriteAuth'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import styles from './AddMedicine.module.css'
function AddMedicine(){
    const [medicineName, setMedicineName]= useState('')
    const [dosage, setDosage]= useState('')
    const [time, setTime]= useState('')
    const [startDate, setStartDate]= useState('')
    const [endDate, setEndDate]= useState('')
    
    const navigate = useNavigate()

    const handleBack=()=>{
        navigate(-1);
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();

        if(!medicineName || !dosage || !time || !startDate || !endDate){
            alert("Please fill all the details!")
        }
        else{
            try{
                const user= await AppwriteAuthService.getCurrentUser()

                if(!user){
                    alert("User not authenticated!");
                    navigate("/login")
                    return;
                }
                const medicineData={
                    userID: user.$id,
                    medicineName: medicineName,
                    dosage: dosage,
                    reminderTime: time,
                    startDate: startDate,
                    endDate: endDate,
                    isNotified: false,
                    isTaken: false
                }

                await medicineDetails.createDocument(medicineData);

                setMedicineName("")
                setDosage("")
                setTime("")
                setStartDate("")
                setEndDate("")

                
                navigate("/dashboard")
            }
            catch(error){
                console.log("Error in adding medicine data :: ", error);
            }
        }
    }

    const handleCancel=()=>{
        if(window.confirm("Do you really want to discard the medicine entry?")){
            navigate("/dashboard");
        }
    }


    return(

        <div className={styles.addMedicineContainer}>
            <div className={styles.addMedicineForm}>
                <div className={styles.formContainer}>
                    <button type="button" className={styles.backButton} onClick={handleBack}> 
                        <FontAwesomeIcon icon={faArrowLeft}/> Back
                    </button>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div>
                        <h2 className={styles.headers}>Add New Medicine</h2>
                        <p className={styles.para}>Fill in the details to add a new medicine to your schedule</p>

                        <div className={styles.medicineName}>
                            <p className={styles.para2}>Medicine Name</p>
                            <input type="text"
                            placeholder="Enter your medicine name"
                            value={medicineName}
                            onChange={(e)=>setMedicineName(e.target.value)}
                            className={styles.inputBox}
                            required
                            />
                        </div>
                        <div className={styles.dosage}>
                            <p className={styles.para2}>Dosage</p>
                            <input type="text"
                            placeholder="Enter the dose of the medicine"
                            value={dosage}
                            onChange={(e)=>setDosage(e.target.value)}
                            className={styles.inputBox}
                            required
                            />
                        </div>
                        <div className={styles.time}>
                            <p className={styles.para2}>Time</p>
                            <input type="time"
                            placeholder="--:--"
                            value={time}
                            onChange={(e)=>setTime(e.target.value)}
                            className={styles.inputBox}
                            required
                            />
                        </div>
                        <div className={styles.date}>
                            <div className={styles.startingDate}>
                                <p className={styles.para2}>Start Date</p>
                                <input type="date"
                                placeholder="dd-mm-yy"
                                value={startDate}
                                onChange={(e)=>setStartDate(e.target.value)}
                                className={styles.inputBox}
                                required
                                />
                            </div>
                            <div className={styles.endingDate}>
                                <p className={styles.para2}>End Date</p>
                                <input type="date"
                                placeholder="dd-mm-yy"
                                value={endDate}
                                onChange={(e)=>setEndDate(e.target.value)}
                                className={styles.inputBox}
                                required
                                />
                            </div>
                        </div>
                        <div className={styles.submits}>
                            <button type="submit" className={styles.addBtn}>
                                <FontAwesomeIcon icon={faPlus}/>Add Medicine
                            </button>
                            <button type="button" className={styles.cancelBtn} onClick={handleCancel}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddMedicine