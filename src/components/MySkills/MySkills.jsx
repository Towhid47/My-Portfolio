import React from 'react';
import './MySkills.css';

/////////// Skill Section Images import /////////
import react from '../../assets/skills image/react.png';
import html from '../../assets/skills image/html.png';
import css from '../../assets/skills image/css.png';
import js from '../../assets/skills image/js.jpg';
import node from '../../assets/skills image/nodejs.png';
import firebase from '../../assets/skills image/firebase.png';
import netlify from '../../assets/skills image/netlify.png';
import vercel from '../../assets/skills image/vercel.jpg';
import tailwind from '../../assets/skills image/tailwind.png';
import bootstrap from '../../assets/skills image/bootstrap.png';
import mongodb from '../../assets/skills image/mongodb.png';
import express from '../../assets/skills image/expressjs.png';

const MySkills = () => {
    return (
        <div>
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
                    <p className='d-none d-lg-block'>Node JS</p>
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
};

export default MySkills;