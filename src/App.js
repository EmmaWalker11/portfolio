//Note to self: Use rfce to create new file templates

import './App.css';
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
            <NavBar />
            <About />
            <Skills />
            <Contact />
            <Projects />
        
        </main>
    </div>
  )
}

export default App