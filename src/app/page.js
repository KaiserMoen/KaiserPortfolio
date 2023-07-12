'use client'
import React from 'react';
import NavBar from './components/NavBar.jsx'
import About from './components/Home.jsx'

function App(){
  return(
    <div className='main'>
      <NavBar/>
      <About/>
    </div>
  );
}

export default App;