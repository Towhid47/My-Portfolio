import './App.css';

//////////// Navbar Icons///////
import { FaHome, FaLightbulb, FaMailBulk, FaProjectDiagram, FaUserAlt } from 'react-icons/fa';

//////////// Type Writer text animation import ////////////
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="App">
        {/* ////////////////////// Navbar Section Start///////////////////////// */}
        <div className='navigationbar'>
              <div>
                  <a href="#home" alt="home"><FaHome className='nav-item bounce'/></a>
                  <p>Home</p>
              </div>
              <div>
                  <a href="#skills" alt="skills"><FaLightbulb className='nav-item bounce'></FaLightbulb></a>
                  <p>Skills</p>
              </div>
              <div>
                  <a href="#projects" alt="projects"><FaProjectDiagram className='nav-item bounce'></FaProjectDiagram></a>
                  <p>Projects</p>
              </div>
              <div>
                  <a href="#about" alt="about"><FaUserAlt className='nav-item bounce'></FaUserAlt></a>
                  <p>About Me</p>
              </div>
              <div>
                  <a href="#contact" alt="contact"><FaMailBulk className='nav-item bounce'></FaMailBulk></a>
                  <p>Contact Me</p>
              </div>
        </div>
        {/* ////////////////////// Navbar Section End///////////////////////////// */}



         {/*////////////////////// Header Section Start/////////////////////////*/}
         <div className='container'>
            <h1 className='greetings'>Hello! Welcome to my portfolio</h1>
            <h1 className='name'>I'm <span className='my-name'>Towhidur Rahman</span></h1>
            <h1 className='my-designation'><Typewriter options={{  strings: ['MERN Stack Developer', 'UI/UX Designer'],  autoStart: true,  loop: true,  }}/></h1>
         </div>
         {/* /////////////////// Header Section End//////////////////////////// */}
    </div>
  );
}

export default App;
