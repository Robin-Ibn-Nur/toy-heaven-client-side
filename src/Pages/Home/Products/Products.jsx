import React from 'react';
import { Tabs, Tab, Chip, Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react";
import Title from '../../../Components/Title/Title';

const Products = () => {
    let tabs = [
        {
            id: 1,
            label: 'Action Figures',
            imageUrl: 'action-figure.jpg',
            toyName: 'Superhero Action Figure',
            price: 19.99,
            rating: 4.5,
            content: 'Collectible superhero action figure with detailed features.',
        },
        {
            id: 2,
            label: 'Dolls',
            imageUrl: 'doll.jpg',
            toyName: 'Fashion Doll',
            price: 14.99,
            rating: 4.2,
            content: 'Fashionable doll with various outfits and'
        },
        {
            id: 3,
            label: 'Building Blocks',
            imageUrl: 'building-blocks.jpg',
            toyName: 'Classic Building Blocks',
            price: 29.99,
            rating: 4.8,
            content: 'Set of colorful building blocks for creative play.',
        },
    ];
    // let tabs = [
    //     {
    //         "name": "Marvel",
    //         "toys": [
    //             {
    //                 "picture": "marvel_toy1.jpg",
    //                 "name": "Marvel Toy 1",
    //                 "price": 19.99,
    //                 "rating": 4.5,
    //                 "viewDetailsButton": "View Details"
    //             },
    //             {
    //                 "picture": "marvel_toy2.jpg",
    //                 "name": "Marvel Toy 2",
    //                 "price": 24.99,
    //                 "rating": 4.2,
    //                 "viewDetailsButton": "View Details"
    //             },
    //             {
    //                 "picture": "marvel_toy3.jpg",
    //                 "name": "Marvel Toy 3",
    //                 "price": 29.99,
    //                 "rating": 4.7,
    //                 "viewDetailsButton": "View Details"
    //             },
    //             {
    //                 "picture": "marvel_toy4.jpg",
    //                 "name": "Marvel Toy 4",
    //                 "price": 34.99,
    //                 "rating": 4.0,
    //                 "viewDetailsButton": "View Details"
    //             }
    //         ]
    //     },
    //     {
    //         "name": "Avengers",
    //         "toys": [
    //             {
    //                 "picture": "avengers_toy1.jpg",
    //                 "name": "Avengers Toy 1",
    //                 "price": 21.99,
    //                 "rating": 4.3,
    //                 "viewDetailsButton": "View Details"
    //             },
    //             {
    //                 "picture": "avengers_toy2.jpg",
    //                 "name": "Avengers Toy 2",
    //                 "price": 26.99,
    //                 "rating": 4.6,
    //                 "viewDetailsButton": "View Details"
    //             },
    //             {
    //                 "picture": "avengers_toy3.jpg",
    //                 "name": "Avengers Toy 3",
    //                 "price": 31.99,
    //                 "rating": 4.1,
    //                 "viewDetailsButton": "View Details"
    //             },
    //             {
    //                 "picture": "avengers_toy4.jpg",
    //                 "name": "Avengers Toy 4",
    //                 "price": 36.99,
    //                 "rating": 4.8,
    //                 "viewDetailsButton": "View Details"
    //             }
    //         ]
    //     },
    //     {
    //         "name": "Star Wars",
    //         "toys": [
    //             {
    //                 "picture": "star_wars_toy1.jpg",
    //                 "name": "Star Wars Toy 1",
    //                 "price": 17.99,
    //                 "rating": 4.4,
    //                 "viewDetailsButton": "View Details"
    //             },
    //             {
    //                 "picture": "star_wars_toy2.jpg",
    //                 "name": "Star Wars Toy 2",
    //                 "price": 22.99,
    //                 "rating": 4.9,
    //                 "viewDetailsButton": "View Details"
    //             },
    //             {
    //                 "picture": "star_wars_toy3.jpg",
    //                 "name": "Star Wars Toy 3",
    //                 "price": 27.99,
    //                 "rating": 4.2,
    //                 "viewDetailsButton": "View Details"
    //             },
    //             {
    //                 "picture": "star_wars_toy4.jpg",
    //                 "name": "Star Wars Toy 4",
    //                 "price": 32.99,
    //                 "rating": 4.7,
    //                 "viewDetailsButton": "View Details"
    //             }
    //         ]
    //     },
    //     {
    //         "name": "Transformers",
    //         "toys": [
    //             {
    //                 "picture": "transformers_toy1.jpg",
    //                 "name": "Transformers Toy 1",
    //                 "price": 23.99,
    //                 "rating": 4.6,
    //                 "viewDetailsButton": "View Details"
    //             },
    //             {
    //                 "picture": "transformers_toy2.jpg",
    //                 "name": "Transformers Toy 2",
    //                 "price": 28.99,
    //                 "rating": 4.3,
    //                 "viewDetailsButton": "View Details"
    //             },
    //             {
    //                 "picture": "transformers_toy3.jpg",
    //                 "name": "Transformers Toy 3",
    //                 "price": 33.99,
    //                 "rating": 4.5,
    //                 "viewDetailsButton": "View Details"
    //             },
    //             {
    //                 "picture": "transformers_toy4.jpg",
    //                 "name": "Transformers Toy 4",
    //                 "price": 38.99,
    //                 "rating": 4.4,
    //                 "viewDetailsButton": "View Details"
    //             }
    //         ]
    //     }
    // ]



    return (
        <div className="container mx-auto flex items-center w-full flex-col">
            <Title title="Shop By Category" />
            <Tabs
                aria-label="Dynamic tabs" items={tabs}
                color="primary"
                variant="underlined"
                classNames={{
                    tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                    cursor: "w-full bg-[#22d3ee]",
                    tab: "max-w-fit px-0 h-12",
                    tabContent: "group-data-[selected=true]:text-[#06b6d4]"
                }}
            >
                {(item) => (
                    <Tab key={item.id} title={
                        <div className="flex items-center space-x-2">

                            <span>{item.label}</span>
                            <Chip size="sm" variant="faded">{item.label.length}</Chip>
                        </div>
                    }>
                        <Card shadow='sm' isPressable onPress={() => console.log("item pressed")}>
                            <CardHeader>
                                <h3 className='text-center'>{item.toyName}</h3>
                            </CardHeader>
                            <CardBody className='text-center overflow-visible p-0'>
                                <p>Description: {item.content}</p>

                            </CardBody>
                            <CardFooter className="text-small justify-between">

                                <p className="text-default-500">Price: {item.price}</p>
                                <p className="text-default-500">Rating: {item.rating}</p>
                            </CardFooter>
                        </Card>
                    </Tab>
                )}

            </Tabs>
        </div>
    );
};

export default Products;