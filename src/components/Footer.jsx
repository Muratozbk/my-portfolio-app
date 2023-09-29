import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import './FooterStyles.css'

import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20}
                            style={{ color: "#efefef", marginRight: "2rem" }} />
                        <div>
                            <p>Kadıköy İstanbul</p>
                            <p>Türkiye</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4> <FaPhone size={20}
                            style={{ color: "#efefef", marginRight: "2rem" }} />
                            +90-535-457-07-76 </h4>
                    </div>
                    <div className="email">
                        <h4> <FaMailBulk size={20}
                            style={{ color: "#efefef", marginRight: "2rem" }} />
                            muratozbek1985@gmail.com </h4>
                    </div>

                </div>

                <div className="right">
                    <h4>About me</h4>
                    <p> This is Murat. I enjoy to develop Frontend web projects with React. </p>
                    <div className="social">
                        <FaGithub size={30}
                            style={{ color: "#efefef", marginRight: "1rem" }} />
                        <FaTwitter size={30}
                            style={{ color: "#efefef", marginRight: "1rem" }} />
                        <FaLinkedin size={30}
                            style={{ color: "#efefef", marginRight: "1rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer