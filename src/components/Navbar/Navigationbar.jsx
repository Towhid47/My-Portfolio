import React from 'react';
import { FaHome, FaLightbulb, FaMailBulk, FaProjectDiagram, FaUserAlt } from 'react-icons/fa';
import './Navigationbar.css';

const Navigationbar = () => {
    return (
        <div>
              {/* ////////////////////// Navbar Section Start///////////////////////// */}
                <div className='navigationbar sticky-top'>
                    <div>
                        <a href="/" alt="home"><FaHome className='nav-item bounce'/></a>
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
        </div>
    );
};

export default Navigationbar;