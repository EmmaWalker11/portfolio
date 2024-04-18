import React, {useState} from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    const [click, setClick] = useState(false);
    return (
        <>
        <nav className='navbar'>
            <div className='navMenu'>
                <Link to="/" >Emma</Link>
                <div className='navMenu'>
                    <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'} />
                    {/* <Link to="/">About</Link> */}
                </div>
            </div>
            
        </nav>

        </>
        // <div className='NavBar'>
        //     <ul className='NavMenu'>
        //         <li> <a href='#about'>Emma Walker</a></li>
        //         <li> <a href='#skills'>Skills</a></li>
        //         <li> <a href='#contact'>Contact</a></li>
        //         <li> <a href='#projects'>Projects</a></li>
    
        //     </ul>
        // </div>
        
    )
}

export default NavBar