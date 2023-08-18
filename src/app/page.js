'use client'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Main from './components/Main.jsx'
import { createBrowserRouter, Routes,Route, Link, createRoutesFromElements, RouterProvider, Outlet } from 'react-router-dom';
function App(){
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element={<NavBar/>} >
        <Route index element = {<Home/>}/>
        <Route path = "about" element = {<About/>}/>
        <Route path='project' element = {<Projects/>}/>
      </Route>
    )
  )
  return(
    <div className='main'>
      <RouterProvider router = {router}></RouterProvider>
    </div>
    
  );
}

export default App;