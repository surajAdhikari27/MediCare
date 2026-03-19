import React,{useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faFloppyDisk} from '@fortawesome/free-solid-svg-icons'
import medicineDetails from '../appwrite/MedicineCRUD'
import styles from './EditMedicine.module.css'

function EditMedicine(){

    const [medicineName, setMedicineName]= useState("")
    const [dosage, setDosage]= useState("")
    const [time, setTime]= useState("")
    const [startDate, setStartDate]= useState("")
    const [endDate, setEndDate]= useState("")

    const navigate= useNavigate()

    const handleBack=()=>{
        navigate(-1);
    }

    const {id}= useParams()

    useEffect(()=>{
        const fetchPrevData=async ()=>{
            try{
                const prevMedicineData= await medicineDetails.getDocument(id)

                setMedicineName(prevMedicineData.medicineName)
                setDosage(prevMedicineData.dosage)
                setTime(prevMedicineData.reminderTime)
                setStartDate(prevMedicineData.startDate)
                setEndDate(prevMedicineData.endDate)

            }
            catch(error){
                console.log("Error in fetching previous medicine data :: ", error)
            }
        }
        
        fetchPrevData()
    },[id])

    const handleSubmit=async(e)=>{
        e.preventDefault()

        if(!medicineName || !dosage || !time || !startDate || !endDate){
            alert("Please fill all the details!")
            return
        }
        
        try{
            const updatedData={
                medicineName,
                dosage,
                reminderTime: time,
                startDate,
                endDate
            }

            await medicineDetails.updateDocument(id, updatedData);
            navigate("/dashboard");
        }
        catch(error){
            console.log("Error in updating the medicine details :: ", error)
        }
    }

    const handleCancel=()=>{
        if(window.confirm("Do you really want to cancel?")){
            navigate("/dashboard")
        }
    }

    return(
        <>
        <div className={styles.editMedicineForm}>
            <div className={styles.formContainer}>
                <button type="button" onClick={handleBack}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                    Back
                </button>
        
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2>Edit Medicine</h2>
                        <p>Update the details of your medicine</p>

                        <div className={styles.medicineName}>
                            <p>Medicine Name</p>
                            <input
                            type="text"
                            placeholder="Enter the name of the medicine"
                            value={medicineName}
                            onChange={(e)=>setMedicineName(e.target.value)}
                            />
                        </div>

                        <div className={styles.dosage}>
                            <p>Dosage</p>
                            <input
                            type="text"
                            placeholder="Enter the dose of the medicine"
                            value={dosage}
                            onChange={(e)=>setDosage(e.target.value)}
                            />
                        </div>

                        <div className={styles.time}>
                            <p>Time</p>
                            <input
                            type="time"
                            placeholder="--:--"
                            value={time}
                            onChange={(e)=>setTime(e.target.value)}
                            />
                        </div>

                        <div className={styles.dates}>
                            <div className={styles.startDate}>
                                <p>Start Date</p>
                                <input
                                type="date"
                                placeholder="dd-mm-yy"
                                value={startDate}
                                onChange={(e)=>setStartDate(e.target.value)}
                                />
                            </div>

                            <div className={styles.endDate}>
                                <p>End Date</p>
                                <input
                                type="date"
                                placeholder="dd-mm-yy"
                                value={endDate}
                                onChange={(e)=>setEndDate(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className={styles.submits}>
                            <button type="submit">
                                <FontAwesomeIcon icon={faFloppyDisk}/>
                                Save Changes
                            </button>

                            <button type="button" onClick={handleCancel}>
                                Cancel
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
        </>

    )
}

export default EditMedicine;
