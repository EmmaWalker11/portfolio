import React from 'react'
import { projects } from "./Data.js";

function Projects() {
  return (
    <>
        <section id="projects">
            <div>Projects</div>
            {/* link github TODO */}
                <h1>Apps I've built</h1>
                <div>
                    {projects.map((project) => (<a href={project.link} key={project.image}>
                    <div>
                        <img alt="gallery"src={project.image}/>
                        <div>
                            <h2>{project.subtitle}</h2>
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                        </div>
                    </div>
                    </a>))}
            </div>
        </section>
    </>
    
  )
}

export default Projects