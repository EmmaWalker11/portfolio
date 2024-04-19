// import React, {useState} from 'react'
import React from 'react';
import Logo from '../images/logo192.png';
import {FaBars, FaTimes} from 'react-icons/fa';
import './NavBar.css';
// import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="navBar">
            <div className='logo'>

                <img src={Logo} alt='logo' />
                
            </div>
            <ul className='navMenu'>
                <li className='navItem'><a href='#home'>Home</a></li>
                <li className='navItem'><a href='#about'>About</a></li>
                <li className='navItem'><a href='#projects'>Projects</a></li>
                <li className='navItem'><a href='#contact'>Contact</a></li>
            </ul>
            <div className='hamburger'>
                <FaBars size={30}/>
            </div>
        </div>
        
    )
}

export default NavBar