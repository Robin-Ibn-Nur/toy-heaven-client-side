import React from 'react';
// import delivery from "../../../../public/delivery.jpg";
// import { Image } from '@nextui-org/react';
import { TbTruckDelivery } from "react-icons/tb"
import { TbGift } from "react-icons/tb"
import { BiSupport } from "react-icons/bi"
import { BsBank } from "react-icons/bs"

const services = [
    {
        title: 'Worldwide Delivery',
        icon: <TbTruckDelivery size={48} color="orange" />,
        description: 'We are committed to delivering our products to children all around the world, spreading joy and happiness!',
    },
    {
        title: 'Gift Voucher',
        icon: <TbGift size={48} color="orange" />,
        description: 'Get our special gift vouchers and surprise your little ones with their favorite toys!',
    },
    {
        title: '24X7 Support',
        icon: <BiSupport size={48} color='orange' />,
        description: 'Our dedicated support team is available 24/7 to assist you with any questions or concerns.',
    },
    {
        title: 'Great Saving',
        icon: <BsBank size={48} color='orange' />,
        description: 'Enjoy great savings on a wide range of toys and games. Affordable fun for all!',
    },
];

const Commitment = () => {
    return (
        <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="border border-gray-200 p-4 rounded-lg hover:shadow-lg hover:bg-orange-200 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:text-blue-500 cursor-pointer"
                >
                    <div className="w-16 h-16 mx-auto">
                        {service.icon} {/* Render the icon component */}
                    </div>
                    <h3 className="text-lg font-semibold text-center ">
                        {service.title}
                    </h3>
                    <p className="text-sm text-center mt-2">{service.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Commitment;
