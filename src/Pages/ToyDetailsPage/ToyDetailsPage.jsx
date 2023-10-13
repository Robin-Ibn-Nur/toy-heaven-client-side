import { Button, Card, CardBody, Image, Progress } from "@nextui-org/react";
import { useLoaderData } from "react-router-dom";
import { HeartIcon } from "./Icons/HeartIcon";
import { useState } from "react";


const ToyDetailsPage = () => {
    const [liked, setLiked] = useState(false);
    const data = useLoaderData();

    return (
        <div
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg py-20 h-full"
        >
            <Card
                isBlurred
                shadow="sm"
                className="mx-auto border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
            >
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                        <div className="relative col-span-6 md:col-span-4">
                            <Image
                                alt="Album cover"
                                className="object-cover"
                                height={200}
                                shadow="md"
                                src={data?.photo}
                                width="100%"
                            />
                        </div>

                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h3 className="font-semibold text-foreground/90">Super Hero of {data?.category}</h3>
                                    <p className="text-small text-foreground/80">Name: {data?.toyName}</p>
                                    <h1 className="text-large font-medium mt-2">{data?.toyName} is a {data?.content}</h1>
                                </div>
                                <Button
                                    isIconOnly
                                    className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                                    radius="full"
                                    variant="light"
                                    onPress={() => setLiked((v) => !v)}
                                >
                                    <HeartIcon
                                        className={liked ? "[&>path]:stroke-transparent" : ""}
                                        fill={liked ? "currentColor" : "none"}
                                    />
                                </Button>
                            </div>

                            <div className="flex flex-col mt-3 gap-1">
                                <Progress
                                    size="sm"
                                    isIndeterminate
                                    aria-label="Loading..."
                                    className="max-w-md"
                                />
                                <div className="flex justify-between">
                                    <p className="text-small">Price: {data?.price}$</p>
                                    <p className="text-small text-foreground/50">Rating: {data?.rating} star</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>

    );
};

export default ToyDetailsPage;