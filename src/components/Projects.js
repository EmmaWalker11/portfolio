//    FileName: Projects.js
//    Author: Emma Walker
//    Date last modified: 20/04/2024
//    Description: A container for the projects section on the site.
//     It allows for data to be taken from the data.js file to display.
//     With the css images are on one side and text on the other with buttons linking to where the project is

import React from 'react'
import { projects } from "./Data.js";
import './Projects.css';

function Projects() {
  return (
    <>
        <section id="projects">
            {/* Container for section */}
            <div className='projectsContainer'>
                {/* Heading for section */}
                <div className='projectsHeader'>
                    <div id='projectH2'>Projects</div>
                    <hr id='projectHr'></hr>
                    <p id='projectLine'>Here you will find some projects that I have done or I am currently working on</p>
                </div>
                {/* Projects container */}
                <div className='projectsListContainer'>
                        {projects.map((project) => (
                        <div className='projectItem'>
                            <div className='projectImage'>
                                {/* Image for project */}
                                <img alt="gallery"src={project.image}/>
                            </div>
                            {/* Getting the rest of the stuff describing the project */}
                            <div className='projectDetails'>
                                <h3 className='projectTitle'>{project.title}</h3>
                                <h4 className='projectSubtitle'>{project.subtitle}</h4>
                                <p className='projectDescription'>{project.description}</p>
                                <a href={project.link} class="button">View Project</a>
                            </div>
                        </div>
                        ))}
                </div>
                {/* Remove when there are more up */}
                <hr />
                <div className='projectsHeader' id='moreSoon'>More projects coming soon!</div>
                <hr />
            </div>
        </section>
    </>
    
  )
}

export default Projects