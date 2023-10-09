import React from 'react';
import { Tabs, Tab, Chip, Card, CardBody, CardHeader } from "@nextui-org/react";
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
                        <Card>
                            <CardBody className='text-center'>
                                <p>Description: {item.content}</p>
                                <p>Price: {item.price}</p>
                                <p>Rating: {item.rating}</p>
                            </CardBody>
                        </Card>
                    </Tab>
                )}
            </Tabs>
        </div>
    );
};

export default Products;