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