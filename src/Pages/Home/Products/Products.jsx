import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Chip, Card, CardBody, CardHeader, CardFooter, Image } from "@nextui-org/react";
import Title from '../../../Components/Title/Title';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        axios.get("https://toy-heaven-server-side.vercel.app/alltoys")
            .then(response => {
                setToys(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    const uniqueCategories = Array.from(new Set(toys.map(toy => toy.category)));

    return (
        <div className="container mx-auto flex items-center w-full flex-col">
            <Title title="Shop By Category" />
            <Tabs
                aria-label="Dynamic tabs"
                items={uniqueCategories.map((category, index) => ({ id: index, label: category }))}
                color="primary"
                variant="underlined"
                classNames={{
                    tabList: "gap-10 w-full relative rounded-none p-0 border-b border-divider",
                    cursor: "w-full bg-[#22d3ee]",
                    tab: "max-w-fit px-0 h-12",
                    tabContent: "group-data-[selected=true]:text-[#06b6d4]"
                }}
            >
                {(item) => (
                    <Tab key={item.id} title={
                        <div className="flex items-center space-x-2">
                            <span>{item.label}</span>
                        </div>
                    }>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {toys.map((toy) => {
                                if (toy.category === item.label) {
                                    return (
                                        <Link to={`/toys/${toy._id}`} key={toy._id}>
                                            <Card isFooterBlurred shadow="sm" isPressable className='h-auto' onPress={() => console.log("item pressed")}>
                                                <CardBody className="overflow-visible p-0">
                                                    <Image
                                                        shadow="sm"
                                                        radius="lg"
                                                        width="100%"
                                                        alt={toy?.toyName}
                                                        className="w-full object-cover h-[400px]"
                                                        src={toy?.photo}
                                                    />
                                                </CardBody>
                                                <CardFooter className="text-small text-white flex-col absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 gap-2">
                                                    <h4>{toy?.content && toy.content.split(/\s+/).slice(0, 4).join(" ")} ...</h4>
                                                    <div className='flex space-x-32'>
                                                        <b>Rating: {toy?.rating}</b>
                                                        <p>Price: {toy?.price}</p>
                                                    </div>
                                                </CardFooter>
                                            </Card>
                                        </Link>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </Tab>
                )}
            </Tabs>
        </div>
    );
};

export default Products;
