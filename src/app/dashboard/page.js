import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import NavBar from './NavBar.jsx'
import PagesLayout from './PagesLayout.jsx'
import Contact from './Contact.jsx'
function Main(){
    return(
        <PagesLayout className='main'>
            <Home></Home>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </PagesLayout>
    )
}
export default Main;