import React from 'react'

function About() {
  return (
    <div>
    <section id="about">
        <div>
            <h1>Hi! I'm Emma Walker </h1>
            <h3>Pronouns: She/Her</h3>

        </div>
      <div>
        <div>
          <h1>
            Hi, I'm Emma.
            <br/>I love to build amazing
            apps.
          </h1>
          <p>
            Talk about
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        
      </div>
    </section>
    </div>
  )
}

export default About