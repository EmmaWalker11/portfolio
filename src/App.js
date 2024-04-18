//Note to self: Use rfce to create new file templates

import './App.css';
import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Projects from './components/Projects'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
        {/* <Router>
            <NavBar />
            <Routes>
                <Route path="/" exact/>
            </Routes>
            
        </Router> */}
        <main>
            <NavBar />
            <About />
            <Projects />
            <Contact />
        
        </main>
    </>
  )
}

export default App