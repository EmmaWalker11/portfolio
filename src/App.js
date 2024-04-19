//Note to self: Use rfce to create new file templates

import './App.css';
import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroImage from './components/IntroImage';


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
            <IntroImage />
            <About />
            <Projects />
            <Contact />
            <Footer />
        
        </main>
    </>
  )
}

export default App