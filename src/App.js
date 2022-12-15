import './App.css';

//////////// Navbar Icons///////
import { FaFacebook, FaGithub, FaHome, FaLightbulb, FaLinkedin, FaMailBulk, FaProjectDiagram, FaUserAlt } from 'react-icons/fa';

//////////// Type Writer text animation import ////////////
import Typewriter from 'typewriter-effect';

/////////// Skill Section Images import /////////
import react from './assets/skills image/react.png';
import html from './assets/skills image/html.png';
import css from './assets/skills image/css.png';
import js from './assets/skills image/js.jpg';
import node from './assets/skills image/nodejs.png';
import firebase from './assets/skills image/firebase.png';
import netlify from './assets/skills image/netlify.png';
import vercel from './assets/skills image/vercel.jpg';
import tailwind from './assets/skills image/tailwind.png';
import bootstrap from './assets/skills image/bootstrap.png';
import mongodb from './assets/skills image/mongodb.png';
import express from './assets/skills image/expressjs.png';
import next from './assets/skills image/nextjs.png';

function App() {
  return (
    <div className="App">
        {/* ////////////////////// Navbar Section Start///////////////////////// */}
        <div className='navigationbar sticky-top'>
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
         <header className='header container mt-5'>
            <h1 className='greetings'>Hello! Welcome to my portfolio</h1>
            <h1 className='name'>I'm <span className='my-name'>Towhidur Rahman</span></h1>
            <h1 className='my-designation'><Typewriter options={{  strings: ['MERN Stack Developer', 'UI/UX Designer'],  autoStart: true,  loop: true,  }}/></h1>
            <h1 className='my-designation'>1+ Years of Experience in Web Development.</h1>
            
            <div className='social'> <a className='social-link' href="https://www.facebook.com/mdtowhidur.rahman.92"><FaFacebook></FaFacebook></a>{"  "}<a className='social-link' href="https://www.linkedin.com/in/md-towhidur-rahman-83ba78259/"><FaLinkedin></FaLinkedin></a>{"  "} <a className='social-link' href="https://github.com/Towhid47"><FaGithub></FaGithub></a></div>
            <div className='header-btn'><a target="_blank" href="https://drive.google.com/file/d/1z-GyXJ-dYjyFj2dB3dPRKkxFnqA6mqG2/view?usp=share_link" alt="my-resume"><button className='button'>My Resume</button></a></div>
         </header>
         {/* /////////////////// Header Section End//////////////////////////// */}



         {/*////////////////// My Skills Section Start/////////////////////////// */}
         <section className='section p-5'>
              <h1 className='heading text-center mb-5 fw-bold'> My Skills </h1>
              <div className='skills'>
                 <div className='w-50 text-center rotate-img'>
                     <img src={html} alt="html" className='w-50' />
                     <p className='d-none d-lg-block'>HTML5</p>
                 </div>
                 <div className='w-50 text-center rotate-img'>
                     <img src={css} alt="css" className='w-50'/>
                     <p className='d-none d-lg-block'>CSS3</p>
                 </div>
                 <div className='w-50 text-center rotate-img'>
                    <img src={js} alt="Javascript" className='w-50'/>
                    <p className='d-none d-lg-block'>JavaScript</p>
                 </div>
                 <div className='w-50 text-center rotate-img'>
                    <img src={bootstrap} alt="" className='w-50'/>
                    <p className='d-none d-lg-block'>Bootstrap</p>
                 </div>
                 <div className='w-50 text-center rotate-img'>
                    <img src={tailwind} alt="" className='w-50'/>
                    <p className='d-none d-lg-block'>Tailwind CSS</p>
                 </div>

                 <div className='w-50 text-center'>
                    <img src={react} alt="" className='w-50 react'/>
                    <p className='d-none d-lg-block'>React JS</p>
                 </div>

                 <div className='w-50 text-center rotate-img'>
                    <img src={node} alt="" className='w-50'/>
                    <p className='d-none d-lg-block'>ode JS</p>
                 </div>
                 <div className='w-50 text-center rotate-img'>
                    <img src={express} alt="" className='w-50'/>
                    <p className='d-none d-lg-block'>Express JS</p>
                 </div>
                 <div className='w-50 text-center'>
                    <img src={mongodb} alt="" className='w-50 react'/>
                    <p className='d-none d-lg-block'>MongoDB</p>
                 </div>
                 <div className='w-50 text-center rotate-img'>
                    <img src={firebase} alt="" className='w-50'/>
                    <p className='d-none d-lg-block'>Firebase</p>
                 </div>
                 <div className='w-50 text-center'>
                    <img src={netlify} alt="" className='w-50 react'/>
                    <p className='d-none d-lg-block'>Netlify</p>
                 </div>
                 <div className='w-50 text-center rotate-img'>
                    <img src={vercel} alt="" className='w-50'/>
                    <p className='d-none d-lg-block'>Vercel</p>
                 </div>
                 
              </div>
         </section>




         {/* //////////////// My Skills Section End ///////////////////////////// */}
    </div>
  );
}

export default App;
