import React from 'react'
import { projects } from "./Data.js";
import './Projects.css';

function Projects() {
  return (
    <>
        <section id="projects">
            <div className='projectsContainer'>
                <div className='projectsHeader'>
                    <div id='projectH2'>Projects</div>
                    <hr id='projectHr'></hr>
                    <p id='projectLine'>Here you will find some projects that I have done or I am currently working on</p>
                </div>
                {/* link github TODO */}
                <div className='projectsListContainer'>
                    {/* <div className='projectItem'> */}
                        {projects.map((project) => (<a href={project.link} key={project.image}>
                        <div className='projectItem'>
                            <div className='projectImage'>
                                <img alt="gallery"src={project.image}/>
                            </div>
                            <div className='projectDetails'>
                                <h3>{project.title}</h3>
                                <h4>{project.subtitle}</h4>
                                <p>{project.description}</p>
                            </div>
                        </div>
                        </a>))}
                    {/* </div> */}
                </div>
            </div>
        </section>
    </>
    
  )
}

export default Projects