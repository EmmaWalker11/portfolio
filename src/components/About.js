//    FileName: About.js
//    Author: Emma Walker
//    Date last modified: 19/04/2024
//    Description: A container for the about section on the site.
//     It includes a short description on myself, my skills, and some links to other parts of the site and my resume.

import React from 'react'
import Skills from './Skills'
import './About.css';

function About() {
  return (
    <>
        <section id="about">
            <div>About Me</div>
            {/* Introducing myself */}
            <div>
                <h1>Hi! I'm Emma Walker </h1>
                <h3>She/Her</h3>

            </div>
            <div>
                <div>

                {/* Get to know me section*/}
                <p>
                    Talk about
                </p>

                <Skills />

                {/* Resume */}

                {/* Links */}
                <div>
                    <a href="#contact"> Work With Me </a>
                    <a href="#projects">See My Past Work</a>
                </div>
            </div>
      </div>
    </section>
    </>
  )
}

export default About