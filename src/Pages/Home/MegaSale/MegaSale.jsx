import React from 'react';
import sale from "../../../assets/images/Sale.jpg"
import Bigsale from "../../../assets/images/bigSale.jpg"
import { Image } from '@nextui-org/react';

const MegaSale = () => {
    return (
        <div className={`h-screen my-10 bg-cover bg-cover bg-no-repeat relative`}
            style={{ backgroundImage: `url(${sale})` }}>
            <div className='absolute top-[30px] right-[40px] rounded outline-double outline-3 outline-offset-4 outline-orange-500 '>
                <h3 className='text-black lg:text-white font-bold text-2xl lg:text-9xl'>Flash Sale</h3>

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