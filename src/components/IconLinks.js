//    FileName: IconLinks.js
//    Author: Emma Walker
//    Date last modified: 19/04/2024
//    Description: A file for getting icons from fa and linking them to sites needed. I made this orginally in the footer, but
//      ended up making it seperate so I can link them throughout the site.
import React from 'react'
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';
import './IconLinks.css';

function IconLinks() {
  return (
    <>
        <ul className='myIcons'>
            <li><a href='https://github.com/EmmaWalker11'><FaGithub  className='iconItem'/></a></li>
            <li><a href='https://www.linkedin.com/in/emma-walker-6094162bb/'><FaLinkedinIn className='iconItem'/></a></li>
            <li><a href='https://www.instagram.com/_memziy_/'><FaInstagram className='iconItem'/></a></li>
        </ul>   
    </>
  )
}

export default IconLinks