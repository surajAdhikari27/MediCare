import React from 'react'
import styles from './Feature.module.css'
import FeatureCard from './FeatureCard'
import clockIcon from '../../assets/images/clockIcon.png'
import bellIcon from '../../assets/images/bellIcon.png'
import calenderIcon from '../../assets/images/calenderIcon.png'

function Features(){

    const features=[
        {
            icon: clockIcon,
            title: "Smart Scheduling",
            description: "Set up your medication schedule once and let MedCare handle the rest. Customize times for each medicine."
        },
        {
            icon: bellIcon,
            title: "Timely Reminders",
            description: "Get notified when it's time to take your medicine. Never forget a dose with our reliable reminder system."
        },
        {
            icon: calenderIcon,
            title: "Track Progress",
            description: "Monitor your medication adherence over time. View your history and ensure you're staying on track."
        }
    ]


    return(
        <>
        <section className={styles.featuresSection}>
            {features.map((feature, index)=>(
                <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </section>
        </>
    )
}

export default Features;