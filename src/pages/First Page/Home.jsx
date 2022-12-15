import React from 'react';
import Banner from '../../components/Banner/Banner';
import MySkills from '../../components/MySkills/MySkills';
import MyProjects from '../../components/MyProjects/MyProjects';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <MySkills></MySkills>
             <MyProjects></MyProjects>
        </div>
    );
};

export default Home;