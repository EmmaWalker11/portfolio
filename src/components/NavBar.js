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

    // const [click, setClick] = useState(false);

    // const handleClick = () => setClick(!click);

    // const closeMobileNav = () => setClick(false);


    // return (
    //     <>
    //     {/* <header>
    //         <div>
    //             <a href
    //         </div>
    //     </header> */}
    //      <nav className='navBar'>
    //         <div className='navMenu'>
    //             {/* <Link to="/" >Emma</Link> */}
    //             <div className='navMenuIcon' onClick={handleClick}>
    //                 <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'} />
    //                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
    //                     <li className='navItem'> <a href='#home' className='navlink' onClick={closeMobileNav} >Home</a></li>
    //                     <li className='navItem'> <a href='#about' className='navlink' onClick={closeMobileNav} >About</a></li>
    //                     <li className='navItem'> <a href='#projects' className='navlink' onClick={closeMobileNav} >Projects</a></li>
    //                     <li className='navItem'> <a href='#contact' className='navlink' onClick={closeMobileNav} >Contact</a></li>
    //                 </ul>
    //             </div>
    //         </div>
            
    //     </nav>

    //     {/* <nav className='navbar'>
    //         <div className='navMenu'>
    //             <Link to="/" >Emma</Link>
    //             <div className='navMenuIcon' onClick={handleClick}>
    //                 <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'} />
    //                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
    //                     <li className='navItem'> <Link to="/" className='navlink' onClick={closeMobileNav} >Home</Link></li>
    //                     <li className='navItem'> <Link to="/" className='navlink' onClick={closeMobileNav} >About</Link></li>
    //                     <li className='navItem'> <Link to="/" className='navlink' onClick={closeMobileNav} >Projects</Link></li>
    //                     <li className='navItem'> <Link to="/" className='navlink' onClick={closeMobileNav} >Contact</Link></li>
    //                 </ul>
    //             </div>
    //         </div>
            
    //     </nav> */}

    //     </>
    //     // <div className='NavBar'>
    //     //     <ul className='NavMenu'>
    //     //         <li> <a href='#about'>Emma Walker</a></li>
    //     //         <li> <a href='#skills'>Skills</a></li>
    //     //         <li> <a href='#contact'>Contact</a></li>
    //     //         <li> <a href='#projects'>Projects</a></li>
    
    //     //     </ul>
    //     // </div>
        
    )
}

export default NavBar