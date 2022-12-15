import React from 'react';
import Banner from '../../components/Banner/Banner';
import MySkills from '../../components/MySkills/MySkills';
import MyProjects from '../../components/MyProjects/MyProjects';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <MySkills></MySkills>
             <MyProjects></MyProjects>
             <About></About>
             <Contact></Contact>
        </div>
    );
};

export default Home;