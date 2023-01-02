import React from 'react';
import towhid from '../../assets/About ME/towhid.jpg';

import './About.css';

const About = () => {
    return (
            <section className='my-5 bg-black' id="about">
                <div className='d-flex justify-content-evenly flex-column flex-lg-row'>
                        <div className='mobile-screen'>
                            <img src={towhid} className="w-100" alt="" />
                        </div>
                     <div className='mobile-screen d-flex align-items-center mt-5'>
                        <div className='container'>
                            <h1 className='heading'>About Me</h1>
                            <p className='fs-5 mt-3'>I'm from Dhaka,Bangladesh. I'm currently a student of National University. Doing a Bachelor Degree at the Department of Computer Science & Engineering (CSE). I'm passionate and aspired to be a Full Stack Web Developer. I'm still learning and trying to improve myself.</p>
                            <p className='fs-5'>I started my Web Development Journey since last year and still I am passionate and dedicated of learning MERN Stack web development. I am a self-driven, ambitious, and enthusiastic web developer. I have worked on several web development projects using HTML, CSS, JavaScript, React JS, Node JS and MongoDB. I am very interested to work as a Jr. MERN Stack developer and I'd love to do it. I like to keep learning new methods and technologies.</p>
                            <p className='fs-5'>I would love to contribute to supporting the team’s objectives and outstanding performance.</p>
                        </div>
                     </div>
                </div>
                
            </section> 
        
    );
};

export default About;