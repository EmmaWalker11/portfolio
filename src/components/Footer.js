//    FileName: Footer.js
//    Author: Emma Walker
//    Date last modified: 19/04/2024
//    Description: A file for making the footer of the site

// imports
import React from 'react'
import IconLinks from './IconLinks'
import './Footer.css';

function Footer() {
  return (
    <>
    {/* Container */}
        <div className="footerContainer">
          {/* contact details */}
            <div className='contactDetails'>
                <h2>Emma Walker</h2>
                <div>Emma.Walker2410@gmail.com</div>
                <div>0498666015</div>
            </div>
            {/* links for external sites that have to do with me */}
            <div className='iconLinks'>
                <IconLinks />
            </div>
        </div>
    </>
  )
}

export default Footer