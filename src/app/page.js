'use client'
import React from 'react';
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'

function App(){
  return(
    <div className='main'>
      <NavBar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;