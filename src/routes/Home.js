import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Work from '../components/Work'
import { Link } from 'react-router-dom'

function Home() {
    // const workComp = document.getElementById('work-comp')
    const [showNumber, setShowNumber] = useState(3);
    const [showButtonText, setShowButtonText] = useState("Show more projects")

    const workRef = useRef()
    const workComp = workRef.current;

    const toggleShow = () => {

        if (showNumber === 3) {
            setShowNumber(99);
            setShowButtonText("Hide others");
            window.scrollTo({
                top: window.scrollY + window.innerHeight * 0.3,
                behavior: 'smooth'
            });
        } else {
            setShowNumber(3);
            setShowButtonText('Show All Projects');
            window.scrollTo({
                top: workRef.current.offsetTop + 50,
                behavior: "smooth"
            })
        }
    };

    return (
        <div>
            <Navbar />
            <HeroImg />
            <div ref={workRef}></div>
            <Work show={showNumber} />

            <div className="btn w-60 m-auto text-center whitespace-nowrap mb-8 "
                onClick={toggleShow}>{showButtonText} </div>

            <Footer />
        </div>
    )
}

export default Home