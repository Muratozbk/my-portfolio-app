import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Work from '../components/Work'
import { Link } from 'react-router-dom'

function Home() {
    const workComp = document.getElementById('work-comp')
    const [showNumber, setShowNumber] = useState(3);
    const [showButtonText, setShowButtonText] = useState("Show more projects")


    const toggleShow = () => {
        console.log(workComp.getBoundingClientRect())
        if (showNumber === 3) {
            setShowNumber(99);
            setShowButtonText("Hide");
            window.scrollTo({
                top: window.scrollY + window.innerHeight * 0.3,
                behavior: 'smooth'
            });
        } else {
            setShowNumber(3);
            setShowButtonText('Show All Projects');
            window.scrollTo({
                top: window.scrollY + workComp.getBoundingClientRect(),
                behavior: 'smooth'
            });
        }
    }
    return (
        <div>
            <Navbar />
            <HeroImg />
            <div id="work-comp" className="abc">avb ssss</div>
            <Work show={showNumber} />
            <Link to='/'>
                <div className="btn w-60 m-auto text-center whitespace-nowrap mb-8 "
                    onClick={toggleShow}>{showButtonText} </div> </Link>
            <Footer />
        </div>
    )
}

export default Home