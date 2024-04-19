//    FileName: Footer.js
//    Author: Emma Walker
//    Date last modified: 19/04/2024
//    Description: A file for making the footer of the site

import React from 'react'
import IconLinks from './IconLinks'
import './Footer.css';

function Footer() {
  return (
    <>
        <div className="footerContainer">
            <div className='contactDetails'>
                <h2>Emma Walker</h2>
                <div>Emma.Walker2410@gmail.com</div>
                <div>0498666015</div>
            </div>
            <div className='iconLinks'>
                <IconLinks />
            </div>
        </div>
    </>
  )
}

export default Footer