import React from 'react';
import Banner from './Banner/Banner';
import Commitment from './Commitment/Commitment';
import Products from './Products/Products';
import Gellary from './Gellary/Gellary';

const Home = () => {
    return (
        <>
            <Banner />
            <Commitment />
            <Products />
            <Gellary />
        </>
    );
};

export default Home;