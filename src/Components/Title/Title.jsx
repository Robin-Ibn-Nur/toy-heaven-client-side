import React from 'react';
import { GiDuck } from "react-icons/gi"

const Title = ({ title }) => {
    return (
        <div className='mb-4'>
            <div className='border rounded-full mx-auto mb-4 flex items-center h-[60px] w-[60px]'>
                <GiDuck size={50} color='orange' />
            </div>
            <h4 className='font-black text-2xl '>{title}</h4>
        </div>
    );
};

export default Title;