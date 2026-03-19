import React from 'react'
import styles from './HowitWorks.module.css'

function HowitWorks(){

    const steps=[
        {
            stepNo:1,
            title:"Add Your Medicines",
            description: "Enter your medication details including name, dosage, and schedule"
        },
        {
            stepNo:2,
            title:"Get Reminders",
            description: "Receive notifications when it's time to take your medicine"
        },
        {
            stepNo:3,
            title:"Stay Healthy",
            description: "Mark medicines as taken and track your progress over time"
        }
    ]

    return(
        <>
            <section className={styles.HowitworksSection}>
                <h2>How it Works</h2>

                <div className={styles.steps}>
                    {steps.map((step)=>(
                        <div key={step.stepNo}>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default HowitWorks;