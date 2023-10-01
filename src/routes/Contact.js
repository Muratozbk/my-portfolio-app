import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'
import HeroComp from '../components/HeroComp'

function Contact() {
    return (
        <div>
            <Navbar />
            <HeroComp heading={'CONTACT'}
                text={"Lets have a chat"} />
            <Form />
            <Footer />
        </div>
    )
}

export default Contact
// 2.24.40