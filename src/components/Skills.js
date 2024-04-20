//    FileName: Skills.js
//    Author: Emma Walker
//    Date last modified: 20/04/2024
//    Description: A container for the skills section on the site.
//     It includes a list from Data.js on the skills that I have

import React from 'react'
import { skills } from "./Data.js";
import './Skills.css';

function Skills() {
  return (
    <>
    <section id="skills">
        <div className='skillsContainer'>
            <div className='skillsHeader'>
                    <div id='skillsTitle'>My Skills</div>
            </div>
            <div className='skillsListContainer'>
                {skills.map((skill) => (
                <div key={skill} className="skillsList">
                    <div className="skill">
                        <span>{skill}</span>
                    </div>
                </div>))}
            </div>
        </div>
    </section>
    </>
    
  )
}

export default Skills