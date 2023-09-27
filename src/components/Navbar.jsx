import { Link } from 'react-router-dom';
import './NavbarStyles.css';
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    }

    return (
        <div className='header'>

            <Link to={'/'} >
                <h1>Portfolio</h1>
            </Link>

            <ul className={`nav-menu ${click && 'active'}`}>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/project'}>Projects</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
            </ul>

            <div className='hamburger' onClick={handleClick}>
                {!click ? <FaBars size={20} style={{ color: "#efefef" }} /> :
                    <FaTimes size={20} style={{ color: "#efefef" }} />}
            </div>

        </div>
    )
}

// 48:16
export default Navbar