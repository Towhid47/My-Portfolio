import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
    return (
        <div className='mt-5 p-5 d-flex justify-content-around footer-section flex-column flex-lg-row'>
             <div className='d-flex align-items-center'>
                  <h1 className='signature'>Towhid</h1>
             </div>
             <div className='mt-5'>
                  <p className='fs-5'>Although I’m currently looking for Junior MERN Stack Developer position opportunities, my inbox is always open.</p> <p className='fs-5'> Whether you have a question or just want to say hi, I’ll try my best to get back to you soon!</p>
                  <div className='fs-1'>
                       <a className='social-link' href="https://www.facebook.com/mdtowhidur.rahman.92"><FaFacebook></FaFacebook></a>{"  "}<a className='social-link' href="https://www.linkedin.com/in/md-towhidur-rahman-83ba78259/"><FaLinkedin></FaLinkedin></a>{"  "} <a className='social-link' href="https://github.com/Towhid47"><FaGithub></FaGithub></a> <br/> <br /><hr /><span className='fs-5'>&copy; Copyright 2022 All Rights Reserved</span>
                  </div>
             </div>
        </div>
    );
};

export default Footer;