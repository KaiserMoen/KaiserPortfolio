import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import NavBar from './NavBar.jsx'
import PagesLayout from './PagesLayout.jsx'
function Main(){
    return(
        <PagesLayout className='main'>
            <Home></Home>
            <About></About>
            <Projects></Projects>
        </PagesLayout>
    )
}
export default Main;