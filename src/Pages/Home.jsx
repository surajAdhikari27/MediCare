import React from 'react'
import Features from '../Components/Features/Features'
import HeroSection from '../Components/HeroSection/HeroSection'
import HowitWorks from '../Components/HowitWorks/HowitWorks'
import Navbar from '../Components/Navbar/Navbar'

function Home(){
    return(
        <>
        <HeroSection />
        <Features />
        <HowitWorks />
        </>
    )
}

export default Home