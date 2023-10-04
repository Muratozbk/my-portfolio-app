import { Link } from 'react-router-dom';
import './NavbarStyles.css';
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    }

    // Scrool and change nav bg color
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else { setColor(false) }
    };

    window.addEventListener("scroll", changeColor)

    return (
        <div className={`header ${color && 'header-bg'}`}>
            <Link to={'/'} >
                <h1 className=' text-3xl/3 font-semibold'>Portfolio</h1>
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
                {!click ? <FaBars size={20} style={{ color: "#efefef" }} />
                    : <FaTimes size={20} style={{ color: "#efefef" }} />}
            </div>

        </div>
    )
}


export default Navbar