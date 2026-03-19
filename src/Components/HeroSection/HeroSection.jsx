import styles from './HeroSection.module.css'
import {useNavigate} from 'react-router-dom'
import React from 'react'
import medCare from '../../assets/images/medCareIcon.png'
function HeroSection(){
    const navigate= useNavigate()

    const goTodashboard=(e)=>{
        e.preventDefault()
        navigate("/dashboard")
    }
    return(
        <>
            <section className={styles.heroSection}>
                <div className={styles.logo}>
                    <img src={medCare} alt="medCareLogo"/>
                </div>

                <div className={styles.description}>
                    <h1>Never Miss Your Medicine Again</h1>
                    <p>
                        Manage your medications effortlessly with timely reminders and easy tracking. 
                        MediCare helps you stay consistent and prioritize your health every day.
                    </p>
                </div>

                <button type="button" onClick={goTodashboard} className={styles.dashboardBtn}>
                    Go to Dashboard
                </button>
            </section>
        </>
    )
}

export default HeroSection;