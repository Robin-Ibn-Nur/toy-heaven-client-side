import React from 'react';
import sale from "../../../assets/images/Sale.jpg"

const MegaSale = () => {
    return (
        <div className="h-screen my-10 bg-cover bg-cover bg-no-repeat h-full w-full"
            style={{ backgroundImage: `url(${sale})` }}>
            <div className='flex items-end justify-end rounded outline-double outline-3 outline-offset-4 outline-orange-500 '>
                <h3 className='text-black lg:text-white font-bold text-2xl lg:text-9xl'>Flash Sale <span className='text-xl'>30% OFF</span></h3>

            </div>
        </div>


    );
};

export default MegaSale;



{/* <Image
                    shadow='lg'
                    isBlurred
                    isZoomed
                    width={240}
                    src={Bigsale} /> */}