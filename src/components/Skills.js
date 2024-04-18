import React from 'react'
import { skills } from "./Data.js";

function Skills() {
  return (
    <>
    <section id="skills">
        <div>Skills</div>
        <div>
            <div>
            {/* <ChipIcon className="w-10 inline-block mb-4" /> */}
                <h1>Skills &amp; Technologies</h1>
                <p>
                    Here are my skills
                </p>
            </div>
            <div>
                {skills.map((skill) => (
                <div key={skill} className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                {/* <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" /> */}
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