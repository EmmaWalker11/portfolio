//Note to self: Use rfce to create new file templates

import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div>
        <main>
            <h1>Tesing this works</h1>
            <p>another test</p>
            <NavBar />
            <About />
            <Projects />
            <Skills />
            <Contact />
        
        </main>
    </div>
  )
}

export default App