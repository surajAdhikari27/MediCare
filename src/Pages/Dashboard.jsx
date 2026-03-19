import React,{useState, useEffect} from 'react'
import AppwriteAuthService from '../appwrite/AppwriteAuth'
import medicinesDetails from '../appwrite/MedicineCRUD'
import DashboardHeader from '../DashboardComponents/DashboardHeader/DashboardHeader'
import MedicineStatsBar from '../DashboardComponents/MedicineStatsBar/MedicineStatsBar'
import MedicineList from '../DashboardComponents/MedicineList/MedicineList'


function Dashboard(){
    const [medicines, setMedicines]= useState([]) 

    const fetchMedicines= async()=>{
        try{
            const user= await AppwriteAuthService.getCurrentUser()
            const medDetails= await medicinesDetails.listDocument(user.$id)
            setMedicines(medDetails.documents)
        }
        catch(error){
            console.log("Error in fetching the data :: ",error)
        }
    }

    useEffect(()=>{
        fetchMedicines()
    },[])

    return(
        <>
            <div className="dashboardContainer" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 10px' }}>
                <DashboardHeader />
                <MedicineStatsBar 
                medicines={medicines}
                />
                <MedicineList 
                medicines={medicines}
                refreshMedicines={fetchMedicines}
                />
            </div>
        </>
    )
}

export default Dashboard