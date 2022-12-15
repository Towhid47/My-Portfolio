import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navigationbar from '../components/Navbar/Navigationbar';

const Main = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;