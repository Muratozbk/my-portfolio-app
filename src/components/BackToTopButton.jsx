import React, { useEffect, useState } from 'react'
import { FaAngleUp } from 'react-icons/fa'

function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const scrollListener = () => window.scrollY > 300 ?
        setIsVisible(true) : setIsVisible(false);
    useEffect(() => {
        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {isVisible && (
                <div className="back-to-top"
                    onClick={scrollToTop}>
                    <FaAngleUp />

                </div>
            )}
        </>
    )
}

{/* <i className="fa-solid fa-angle-up"></i> */ }
export default BackToTopButton