import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroComp from '../components/HeroComp'
import AboutContent from '../components/AboutContent'

function About() {
    return (
        <div>
            <Navbar />
            <HeroComp heading={'About'}
                text={"I'm a Front-End Developer."} />
            <AboutContent />
            <Footer />
        </div>
    )
}

export default About