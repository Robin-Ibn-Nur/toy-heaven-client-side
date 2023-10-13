import React, { useContext, useState } from 'react';
import { Button, Input, Textarea, Select, SelectItem } from '@nextui-org/react';
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Swal from "sweetalert2"
import { AuthContext } from '../../Provider/AuthProvider';
import { MdOutlineDriveFileRenameOutline, MdPriceChange, MdProductionQuantityLimits } from 'react-icons/md'
import { FcRating } from 'react-icons/fc'
const AddToyForm = () => {
    const [value, setValue] = useState("");
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, reset } = useForm();
    // imageBB_url
    const imageBB_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Upload_token}`

    const onSubmit = async (data) => {

        const newCollection = {
            ...data,
            userEmail: user?.email,
        };
        try {


            const formData = new FormData();
            formData.append('image', data.photo[0]);

            // post image to imageBB
            const response = await axios.post(imageBB_url, formData)

            if (response.data.success) {
                const imgURL = response.data.data.display_url;
                data.photo = imgURL;

                // set the data to database
                const res = await axios.post('http://localhost:5000/toys', newCollection);
                if (res.data.insertedId) {
                    reset()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `You have successfully add a class ${user?.displayName}your class is pending for approved`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }

        } catch (error) {
            if (error) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: `Sorry! ${error.message}`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    };

    const categoryName = [
        { label: 'Marvel', value: 'Marvel' },
        { label: 'Star Wars', value: 'Star Wars' },
        { label: 'Avengers', value: 'Avengers' },
        { label: 'Transformers', value: 'Transformers' },
    ];

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='container mx-auto pb-5'>
            <div className="space-y-6">
                <div className='grid md:grid-cols-2 lg:grid-cols-4 space-x-5'>
                    <div>
                        <label htmlFor="toyname" className="text-sm font-semibold text-gray-200">Toy Name</label>
                        <div className="mt-2 flex rounded-md shadow-sm">
                            <Input

                                type="text"
                                id="toyName"
                                name="toyName"
                                isClearable
                                radius="lg"
                                {...register('toyName')}
                                classNames={{
                                    label: "text-black/50 dark:text-white/90",
                                    input: [
                                        "bg-transparent",
                                        "text-black/90 dark:text-white/90",
                                        "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                                    ],
                                    innerWrapper: "bg-transparent",
                                    inputWrapper: [
                                        "shadow-xl",
                                        "bg-default-200/50",
                                        "dark:bg-default/60",
                                        "backdrop-blur-xl",
                                        "backdrop-saturate-200",
                                        "hover:bg-default-200/70",
                                        "dark:hover:bg-default/70",
                                        "group-data-[focused=true]:bg-default-200/50",
                                        "dark:group-data-[focused=true]:bg-default/60",
                                        "!cursor-text",
                                    ],
                                }}
                                placeholder="Write your toy name here ...."
                                startContent={
                                    <div className="pointer-events-none flex items-center">
                                        <MdOutlineDriveFileRenameOutline />
                                    </div>
                                }

                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="price" className="text-sm font-semibold text-gray-200">Price</label>
                        <div className="mt-2 flex rounded-md shadow-sm">
                            <Input
                                type="number"
                                id="price"
                                name="price"
                                isClearable
                                radius="lg"
                                {...register('price')}
                                classNames={{
                                    label: "text-black/50 dark:text-white/90",
                                    input: [
                                        "bg-transparent",
                                        "text-black/90 dark:text-white/90",
                                        "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                                    ],
                                    innerWrapper: "bg-transparent",
                                    inputWrapper: [
                                        "shadow-xl",
                                        "bg-default-200/50",
                                        "dark:bg-default/60",
                                        "backdrop-blur-xl",
                                        "backdrop-saturate-200",
                                        "hover:bg-default-200/70",
                                        "dark:hover:bg-default/70",
                                        "group-data-[focused=true]:bg-default-200/50",
                                        "dark:group-data-[focused=true]:bg-default/60",
                                        "!cursor-text",
                                    ],
                                }}
                                placeholder="0.00"
                                startContent={
                                    <div className="pointer-events-none flex items-center">
                                        <MdPriceChange />
                                    </div>
                                }
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="rating" className="text-sm font-semibold text-gray-200">Rating</label>
                        <div className="mt-2 flex rounded-md shadow-sm">
                            <Input
                                type="number"
                                id="rating"
                                name="rating"
                                isClearable
                                radius="lg"
                                {...register('rating')}

                                classNames={{
                                    label: "text-black/50 dark:text-white/90",
                                    input: [
                                        "bg-transparent",
                                        "text-black/90 dark:text-white/90",
                                        "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                                    ],
                                    innerWrapper: "bg-transparent",
                                    inputWrapper: [
                                        "shadow-xl",
                                        "bg-default-200/50",
                                        "dark:bg-default/60",
                                        "backdrop-blur-xl",
                                        "backdrop-saturate-200",
                                        "hover:bg-default-200/70",
                                        "dark:hover:bg-default/70",
                                        "group-data-[focused=true]:bg-default-200/50",
                                        "dark:group-data-[focused=true]:bg-default/60",
                                        "!cursor-text",
                                    ],
                                }}
                                placeholder="0.00"
                                startContent={
                                    <div className="pointer-events-none flex items-center">
                                        <FcRating />
                                    </div>
                                }
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="rating" className="text-sm font-semibold text-gray-200">Quantity</label>
                        <div className="mt-2 flex rounded-md shadow-sm">
                            <Input
                                type="number"
                                id="rating"
                                name="rating"
                                isClearable
                                radius="lg"
                                {...register('quantity')}

                                classNames={{
                                    label: "text-black/50 dark:text-white/90",
                                    input: [
                                        "bg-transparent",
                                        "text-black/90 dark:text-white/90",
                                        "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                                    ],
                                    innerWrapper: "bg-transparent",
                                    inputWrapper: [
                                        "shadow-xl",
                                        "bg-default-200/50",
                                        "dark:bg-default/60",
                                        "backdrop-blur-xl",
                                        "backdrop-saturate-200",
                                        "hover:bg-default-200/70",
                                        "dark:hover:bg-default/70",
                                        "group-data-[focused=true]:bg-default-200/50",
                                        "dark:group-data-[focused=true]:bg-default/60",
                                        "!cursor-text",
                                    ],
                                }}
                                placeholder="0.00"
                                startContent={
                                    <div className="pointer-events-none flex items-center">
                                        <MdProductionQuantityLimits />
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="w-1/4">
                    <label htmlFor="category" className="text-sm font-semibold text-gray-200">Select Your Toy Category</label>
                    <div className="mt-2">
                        <Select
                            label="Favorite Toys"
                            placeholder="Select a category"
                            className="capitalize w-full py-2 px-4 text-black rounded-md"
                            {...register('category')}
                        >
                            {categoryName.map((item) => (
                                <SelectItem key={item.value} value={item.value}>
                                    {item.label}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                </div>
                <div>
                    <label htmlFor="about" className="text-sm font-semibold text-gray-200">About</label>
                    <div className="mt-2">
                        <Textarea
                            variant="underlined"
                            color="white"
                            labelPlacement="outside"
                            placeholder="Enter your product description here ..."
                            {...register('content')}
                            value={value}
                            onValueChange={setValue}
                        />
                        <p className="text-white text-sm">
                            Write a few sentences about your product: {value}
                        </p>
                    </div>
                </div>
                <div>
                    <label htmlFor="cover-photo" className="text-sm font-semibold text-gray-200">Toy Photo</label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white-25 px-6 py-10">
                        <div className="text-center">
                            <div className="mt-4 flex text-sm text-gray-600">
                                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md text-white font-extrabold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 hover:text-indigo-500">
                                    <span>Upload your photo</span>
                                    <input id="file-upload"
                                        name="file-upload" type="file" className="sr-only"
                                        {...register('photo')}
                                    />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <Button type="button" className="text-sm font-semibold rounded p-1">
                    Cancel
                </Button>
                <Button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                    Save
                </Button>
            </div>
        </form>
    );
};

export default AddToyForm;