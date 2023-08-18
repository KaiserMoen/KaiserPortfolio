import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import NavBar from './NavBar.jsx'
function Main(){
    return(
        <div>
            <NavBar/>
            <Home></Home>
            <About></About>
            <Projects></Projects>
        </div>
    )
}
export default Main;