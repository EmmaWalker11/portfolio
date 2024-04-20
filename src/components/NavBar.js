//    FileName: NavBar.js
//    Author: Emma Walker
//    Date last modified: 20/04/2024
//    Description: A container for the navBar of the site. It includes my logo and name on one side, and links on the other.
//      For now the site is one page, so this adds links to the different sections of the site
//      and a link to my resume. If the site gets too small, all links are hidden and can be accesed via a hamburger menu

// imports
import React, {useState} from 'react'
import Logo from '../assets/treeLogo.png';
import {FaBars, FaTimes} from 'react-icons/fa';
import Resume from '../assets/EmmaWalkerResume19_04_2024.pdf'
import './NavBar.css';

const NavBar = () => {

    // functions for handling the hamburger part of the navbar

    // Setting the click to false, click can be updated
    const [click, setClick] = useState(false);

    // Changing the icon to the other after clicked on (hamburger or the cross)
    const handleClick = () => setClick(!click);

    //closing the navbar menu when a user clicks on something when in hamburger mode
    const handleCloseNavbar = () => setClick(false);

    return(
        <div className="navBar">
            {/* Stuff for the left including logo and name */}
            <div className='logo'>
                <img src={Logo} alt='logo' />
                <h1>Emma Walker</h1>
            </div>
            {/* A list of links to the right. a function checks if it is normal mode or hamburger mode */}
            <ul className={click ? 'navMenu active' : 'navMenu'}>
                <li className='navItem'><a href='#about' onClick={handleCloseNavbar}>About</a></li>
                <li className='navItem'><a href='#projects'onClick={handleCloseNavbar}>Projects</a></li>
                <li className='navItem'><a href='#contact'onClick={handleCloseNavbar}>Contact</a></li>
                <li className='navItem'><a href={Resume} target='_blank' rel='noreferrer' className='button' id='resumeButton' onClick={handleCloseNavbar}>Resume</a></li>
            </ul>
            {/* Checks if hamburger or cross is needed */}
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30}/>) : <FaBars size={30}/>}
            </div>
        </div>
        
    )
}

export default NavBar