//    FileName: About.js
//    Author: Emma Walker
//    Date last modified: 19/04/2024
//    Description: A container for the about section on the site.
//     It includes a short description on myself, my skills, and some links to other parts of the site and my resume.

import React from 'react'
import Skills from './Skills'
import './About.css';
import { experience } from "./Data.js";
import Leaf from '../images/leaf.png';
import IconLinks from './IconLinks';

function About() {
  return (
    <>
      <section id="about">
          {/* Introducing myself */}
        <div className='aboutMeSectionContainer'>
          <div className='aboutHeader'>
            <div id='aboutH2'>About Me</div>
              <hr id='aboutHr'></hr>
              <p id='aboutLine'>Here is a bit about me and some of my experience</p>
            </div>
            <div className='aboutWritingContainer'>
              <div className='getToKnowMeSection'>
                <h3 className='sectionHeading'>Get to know me!</h3>
                <p>Hi! I'm Emma (she/her), a software engineering student with a passion to learn and adapt to new technologies. I am a current third year university student at the University of Newcastle studying a Bachelors of Software Engineering (honours). I have currently undergone 16 courses and have a gpa of 6.3/7. I am Newcastle based and seeking casual employment and summer internships. </p>
                <p>Some cool things about me. I am deaf in one ear. I am a dual citizen of both America and Australia. Outside of being a software engineer, I am an artist with both traditional and digital art. I’m a photographer. And I play a bit of guitar. I also love video games, so much so that I am the team coordinator for the University of Newcastles Esports club Valorant team.</p>
                <p>Feel free to contact me! </p>
                <div className='divOfButtons'>
                  <div className='buttonOne'>
                    <a href='#contact' className='button'>Contact</a>
                  </div>
                  <div className='buttonTwo'>
                    <button className='button'>Resume</button>
                  </div>
                </div>
                <div className='leafToCenter'>
                  <img className="leafImage" src={Leaf} alt='Drawing of a leaf'/>
                </div>
                <div className='iconsToCenter'>
                  <IconLinks className='iconLinks'/>
                </div>
                
              </div>
              <div className='experienceSection'>
                <h3 className='sectionHeading'>Experience</h3>
                {experience.map((experience) => (
                <div className='experienceItem'>
                  <h5 className='experienceDate'>{experience.date}</h5>
                  <h3 className='experienceTitle'>{experience.title}</h3>
                  <h4 className='experienceSubtitle'>{experience.subtitle}</h4>
                  <p className='experienceDescription'>{experience.description}</p>
                  <p className='experienceSkills'>Key skills: {experience.skillsFromExperience}</p>        
                  <hr/>
                </div>
                ))}
              </div>
            </div>
            <Skills />
          </div>
            {/* <div>
                <div> */}

                {/* Get to know me section*/}
                {/* <p>
                    Talk about
                </p> */}

                

                {/* Resume */}

                {/* Links */}
                {/* <div>
                    <a href="#contact"> Work With Me </a>
                    <a href="#projects">See My Past Work</a>
                </div> */}
            {/* </div>
      </div> */}
    </section>
    </>
  )
}

export default About