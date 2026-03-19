import React,{useState, useEffect} from 'react'
import DateSection from '../HistoryComponents/DateSection'
import HistoryHeader from '../HistoryComponents/HistoryHeader'
import HistoryStatsBar from '../HistoryComponents/HistoryStatsBar'
import AppwriteAuthService from '../appwrite/AppwriteAuth'
import medicineDetails from '../appwrite/MedicineCRUD'

function History(){
    const [medicines, setMedicines]= useState([])

    const fetchMedicines=async()=>{
        const user= await AppwriteAuthService.getCurrentUser()
        const meds= await medicineDetails.listDocument(user.$id)

        setMedicines(meds.documents)
    }

    useEffect(()=>{
        fetchMedicines()
    },[])

    const groupedData= medicines.reduce((acc, medicine)=>{
        const date= medicine.takenDate? new Date(medicine.takenDate).toDateString():"Missed"

        if(!acc[date]){
            acc[date]=[]
        }
        acc[date].push(medicine)
    
        return acc;
    }, {})

    return(
        <>
            <div style={{ maxWidth: '1100px', margin: '20px auto', padding: '0 12px'}}>
                <HistoryHeader />
                <HistoryStatsBar 
                medicines={medicines}
                />
                {Object.keys(groupedData).map((date)=>(
                    <DateSection 
                    key={date}
                    date={date}
                    medicines={groupedData[date]}
                    />
                ))}
            </div>
        </>
    )
}

export default History