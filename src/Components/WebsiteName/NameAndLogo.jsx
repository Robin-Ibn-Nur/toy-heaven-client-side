import React from 'react';

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
    return <p style={colorfulTextStyles}>Toy Heaven</p>
};

export default NameAndLogo;