import React, {useState, useEffect} from 'react'
import ScheduleHeader from '../ScheduleComponents/ScheduleHeader'
import TimeSection from '../ScheduleComponents/TimeSection'
import ScheduleTips from '../ScheduleComponents/ScheduleTips'
import AppwriteAuthService from '../appwrite/AppwriteAuth'
import medicineDetails from '../appwrite/MedicineCRUD'


function Schedule(){

    const [medicines, setMedicines]= useState([])

    const fetchMedicines= async()=>{
        try{
            const user= await AppwriteAuthService.getCurrentUser()
            const meds= await medicineDetails.listDocument(user.$id)

            setMedicines(meds.documents)
        }
        catch(error){
            console.log("Error in fetching the medicine details :: ", error)
        }
    }

    useEffect(()=>{
        fetchMedicines()
    },[])

    const morningMedicines= medicines.filter((medicine)=>{
        const hour= parseInt(medicine.reminderTime.split(":")[0])
        return hour>=6 && hour <12
    })

    const afternoonMedicines= medicines.filter((medicine)=>{
        const hour= parseInt(medicine.reminderTime.split(":")[0])
        return hour>=12 && hour<17
    })

    const eveningMedicines= medicines.filter((medicine)=>{
        const hour= parseInt(medicine.reminderTime.split(":")[0])
        return hour>=17 && hour<21
    })

    const nightMedicines= medicines.filter((medicine)=>{
        const hour= parseInt(medicine.reminderTime.split(":")[0])
        return hour>=21 || hour<6
    })

    return(
        <>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 10px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <ScheduleHeader />

            <TimeSection 
            title="Morning"
            timeRange="06:00 - 12:00"
            medicines={morningMedicines}
            />

            <TimeSection 
            title="Afternoon"
            timeRange="12:00 - 17:00"
            medicines={afternoonMedicines}
            />

            <TimeSection 
            title="Evening"
            timeRange="17:00 - 21:00"
            medicines={eveningMedicines}
            />

            <TimeSection 
            title="Night"
            timeRange="21:00 - 06:00"
            medicines={nightMedicines}
            />

            <ScheduleTips />
        </div>
        </>
    )
}

export default Schedule;