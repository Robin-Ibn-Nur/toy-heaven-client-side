import React, { useContext } from 'react';
import Banner from './Banner/Banner';
import Commitment from './Commitment/Commitment';
import Products from './Products/Products';
import Gellary from './Gellary/Gellary';
import MegaSale from './MegaSale/MegaSale';
import { AuthContext } from "../../Provider/AuthProvider"
const Home = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
            </div>

        )
    }
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