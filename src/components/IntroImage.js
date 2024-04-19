//    FileName: IntroImage.js
//    Author: Emma Walker
//    Date last modified: 19/04/2024
//    Description: A file for getting an image that will be modified with css to have text centered.
//      This is at the top of the webpage with my name and a small description of myself

import React from 'react'
import Trees from '../images/SoundwaveTreesMiddle.jpg';
import './IntroImage.css';

function IntroImage() {
  return (
    <>
        <div class="imageContainer">
            <img className="treesImage" src={Trees} alt='Sound wave trees'/>
            < div class="imageTextOverlay">
                <h1 id= "emma">Emma Walker</h1>
                <div class="imageTextCaption">
                    <h2 id= "softwareEngineeringStudent">Software Engineering Student</h2>
                </div>
                </div>
        </div>
    </>
    
  )
};

export default IntroImage