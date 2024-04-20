//    FileName: App.js
//    Author: Emma Walker
//    Date last modified: 20/04/2024
//    Description: A file for creating the site. It imports the components and puts them in order to display on the site.
//     

//Note to self: Use rfce to create new file templates

import './App.css';
import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Footer from './components/Footer';
import IntroImage from './components/IntroImage';

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