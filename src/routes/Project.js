import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroComp from '../components/HeroComp'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

function Project() {
    return (
        <div>
            <Navbar />
            <HeroComp heading="PROJECTS"
                text='Some of my recent works' />
            <Work />
            <PricingCard />
            <Footer />
        </div>
    )
}

export default Project
// 2.11