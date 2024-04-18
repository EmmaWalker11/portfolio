import React from 'react'
import Skills from './Skills'

function About() {
  return (
    <>
        <section id="about">
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