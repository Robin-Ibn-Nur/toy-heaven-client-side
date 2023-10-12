import React from 'react';
import Banner from './Banner/Banner';
import Commitment from './Commitment/Commitment';
import Products from './Products/Products';
import Gellary from './Gellary/Gellary';
import MegaSale from './MegaSale/MegaSale';

const Home = () => {
    return (
        <>
            <Banner />
            <Commitment />
            <Products />
            <Gellary />
            <MegaSale />
        </>
    );
};

export default Home;