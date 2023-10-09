import React from 'react';
import bannerImage from "../../../assets/toyHaven.jpg"
import { Button } from '@nextui-org/react';
import BossBaby from './BossBaby';

const Banner = () => {
    const bannerStyle = {
        position: 'relative',
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    };


    return (
        <div style={bannerStyle} className='relative flex justify-center items-center'>
            <div className='flex flex-col text-center justify-center items-center backdrop-opacity-10 backdrop-invert bg-black/30 p-2 lg:p-10 rounded-lg  tracking-widest'>
                <h1 className='text-4xl font-bold text-white'>
                    Welcome to the World of Kids Toys!
                </h1>
                <p className='mt-4 text-2xl text-white'>
                    Explore a magical land of fun and creativity.
                </p>
                <Button color="warning" variant='ghost' className='mt-6 text-white px-4 py-2 rounded-full'>
                    Shop Now
                </Button>
            </div>
            <div className='absolute bottom-[-1.8rem] lg:bottom-[-1.2rem]'>
                <BossBaby />
            </div>
        </div>
    );
};

export default Banner;