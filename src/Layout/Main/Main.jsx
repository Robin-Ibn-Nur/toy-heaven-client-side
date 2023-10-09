import React from 'react';
import NavBar from '../../Pages/Header/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Footer/Footer';

const Main = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;