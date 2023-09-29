import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroComp from '../components/HeroComp'
import PricingCard from '../components/PricingCard'

function Project() {
    return (
        <div>
            <Navbar />
            <HeroComp heading="PROJECTS"
                text='Some of my recent works' />

            <PricingCard />
            <Footer />
        </div>
    )
}

export default Project