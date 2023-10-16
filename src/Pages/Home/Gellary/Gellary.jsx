import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import React from 'react';
import Title from "../../../Components/Title/Title";
import image1 from "../../../assets/images/BlackWidow.jpg"
import image2 from "../../../assets/images/Bumblebee.jpg"
import image3 from "../../../assets/images/captainAmerica.jpg"
import image4 from "../../../assets/images/Scarlet Witch.jpg"
import image5 from "../../../assets/images/IronMan.jpg"

const Gellary = () => {
    return (
        <div className="container mx-auto my-5">
            <Title title="Toy Gallery" />
            <div className=" gap-3 grid grid-cols-12 grid-rows-2 px-8">
                <Card className="col-span-12 sm:col-span-4 h-[400px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Avanger</p>
                        <h4 className="text-white font-medium text-large">Black Widow</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src={image1}
                    />
                </Card>
                <Card className="col-span-12 sm:col-span-4 h-[400px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Transformers</p>
                        <h4 className="text-white font-medium text-large">Bumblebee</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src={image2}
                    />
                </Card>
                <Card className="col-span-12 sm:col-span-4 h-[400px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Marvel Supercharged</p>
                        <h4 className="text-white font-medium text-large">Captain America</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src={image3}
                    />
                </Card>
                <Card className="w-full h-[400px] col-span-12  sm:col-span-5">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Avanger</p>
                        <h4 className="text-white font-medium text-large">Scarlet Witch</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src={image4}
                    />

                </Card>
                <Card className="w-full h-[400px] col-span-12 sm:col-span-7">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Your favourite</p>
                        <h4 className="text-white/90 font-medium text-xl">The Iron Man</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover"
                        src={image5}
                    />

                </Card>
            </div>
        </div>
    );
};

export default Gellary;