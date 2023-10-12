import React from 'react';
import logo from "../../assets/heaven.png"
import { Image } from '@nextui-org/react';
const NameAndLogo = () => {
    const colorfulTextStyles = {
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        color: 'transparent',
        backgroundImage: 'linear-gradient(45deg, #FFD700, #FF5F6D)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        animation: 'colorChange 4s infinite',
    };
    return <div className='flex items-center'>
        <Image src={logo} width={48} height={48} />
        <p style={colorfulTextStyles}>Toy Heaven</p>
    </div>
};

export default NameAndLogo;