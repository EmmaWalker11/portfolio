import React, {useState} from 'react'
// import React from 'react';
import Logo from '../assets/logo192.png';
import {FaBars, FaTimes} from 'react-icons/fa';
import './NavBar.css';
// import { Link } from 'react-router-dom';

const NavBar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const handleCloseNavbar = () => setClick(false);

    return(
        <div className="navBar">
            <div className='logo'>

                <img src={Logo} alt='logo' />
                <h1>Emma Walker</h1>
                
            </div>
            <ul className={click ? 'navMenu active' : 'navMenu'}>
                {/* <li className='navItem'><a href='#home'>Home</a></li> */}
                <li className='navItem'><a href='#about' onClick={handleCloseNavbar}>About</a></li>
                <li className='navItem'><a href='#projects'onClick={handleCloseNavbar}>Projects</a></li>
                <li className='navItem'><a href='#contact'onClick={handleCloseNavbar}>Contact</a></li>
                <button className='resumeButton'onClick={handleCloseNavbar}>Resume</button>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30}/>) : <FaBars size={30}/>}
            </div>
        </div>
        
    )
}

export default NavBar