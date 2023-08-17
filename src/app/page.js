'use client'
import React from 'react';
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'

function App(){
  return(
    <div className='main'>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;