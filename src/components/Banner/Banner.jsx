import React from 'react';
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Banner.css';
//////////// Type Writer text animation import ////////////
import Typewriter from 'typewriter-effect';

/////////// import pdf file /////////////
import resume from '../../assets/Md.Towhidur Rahman portfolio.pdf'

const Banner = () => {
    return (
        <div>
              {/*////////////////////// Header Section Start/////////////////////////*/}
         <header className='header container mt-5'>
            <h1 className='greetings'>Hello! Welcome to my portfolio</h1>
            <h1 className='name'>I'm <span className='my-name'>Md.Towhidur Rahman</span></h1>
            <h1 className='my-designation'><Typewriter options={{  strings: ['MERN Stack Developer', 'UI/UX Designer'],  autoStart: true,  loop: true,  }}/></h1>
            <h1 className='my-designation'>1+ Years of Experience in Web Development.</h1>
            
            <div className='social'> <a className='social-link' href="https://www.facebook.com/mdtowhidur.rahman.92"><FaFacebook></FaFacebook></a>{"  "}<a className='social-link' href="https://www.linkedin.com/in/md-towhidur-rahman-83ba78259/"><FaLinkedin></FaLinkedin></a>{"  "} <a className='social-link' href="https://github.com/Towhid47"><FaGithub></FaGithub></a></div>
            <div className='header-btn'><a target="_blank" href="https://drive.google.com/file/d/1z-GyXJ-dYjyFj2dB3dPRKkxFnqA6mqG2/view?usp=share_link" alt="my-resume"><button className='button'>My Resume</button></a></div>
            <br />
           {/*///// Download PDF file of my Resume //////// */}
           <a href={resume} className="header-btn" download="Towhidur Rahman Resume"><button className='button'>Download Resume <FaDownload /></button></a>
         </header>
         {/* /////////////////// Header Section End//////////////////////////// */}               
        </div>
    );
};

export default Banner;