import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroComp from '../components/HeroComp'

function Contact() {
    return (
        <div>
            <Navbar />
            <HeroComp heading={'Contact'}
                text={"Lets have a chat"} />
            <Footer />
        </div>
    )
}

export default Contact
