import React, { useMemo, useState } from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Textarea, Select, SelectItem } from '@nextui-org/react';


const AddToyForm = () => {
    // const [value, setValue] = useState("");
    // const [selectedKeys, setSelectedKeys] = useState(new Set(["Marvel"]));
    const [formValues, setFormValues] = useState({
        toyName: '',
        price: '',
        rating: '',
        category: 'Marvel', // Default category
        description: '',
    });
    // const selectedValue = useMemo(
    //     () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    //     [selectedKeys]
    // );
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };
    console.log(formValues);
    const categoryName = [
        { label: "Marvel", value: "Marvel" },
        { label: "Star Wars", value: "Star Wars" },
        { label: "Avengers", value: "Avengers" },
        { label: "Transformers", value: "Transformers" }
    ]
    return (
        <form onSubmit={handleSubmit} className='container mx-auto'>
            <div className="space-y-6">
                <div className='flex space-x-40'>
                    <div>
                        <label htmlFor="toyname" className="text-sm font-semibold text-gray-200">Toy Name</label>
                        <div className="mt-2 flex rounded-md shadow-sm">
                            <Input

                                type="text"
                                id="toyName"
                                name="toyName"
                                isClearable
                                radius="lg"
                                value={formValues.toyName}
                                onChange={handleInputChange}
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
                                value={formValues.price}
                                onChange={handleInputChange}

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
                                        <span className="text-default-400 text-small">$</span>
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
                                value={formValues.rating}
                                onChange={handleInputChange}

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
                                        <span className="text-default-400 text-small">⁕</span>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="w-1/3">
                    <label htmlFor="category" className="text-sm font-semibold text-gray-200">Select Your Toy Category</label>
                    <div className="mt-2">
                        {/* <Dropdown>
                            <DropdownTrigger>
                                <Button
                                    variant="bordered"
                                    className="capitalize w-full py-2 px-4 text-white rounded-md shadow-md"
                                >
                                    {formValues.category}
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                aria-label="Single selection example"
                                variant="flat"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={[formValues.category]}
                                onSelectionChange={(newSelection) =>
                                    setFormValues({ ...formValues, category: newSelection[0] })
                                }
                            >
                                {categoryName.map((item) => (
                                    <DropdownItem key={item}>{item}</DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown> */}
                        <Select
                            label="Favorite Animal"
                            placeholder="Select a category"
                            className="capitalize w-full py-2 px-4 text-black rounded-md shadow-md"
                            selectedKeys={formValues.category} // Use just the selected category as the initial selected key
                            onSelectionChange={(newSelection) =>
                                setFormValues({ ...formValues, category: newSelection[0] })
                            }
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
                            value={formValues.description}
                            onChange={(e) =>
                                setFormValues({ ...formValues, description: e.target.value })
                            }
                        />
                        <p className="text-white text-sm">
                            Write a few sentences about your product: {formValues.description}
                        </p>
                    </div>
                </div>
                <div>
                    <label htmlFor="cover-photo" className="text-sm font-semibold text-gray-200">Cover Photo</label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white-25 px-6 py-10">
                        <div className="text-center">
                            <div className="mt-4 flex text-sm text-gray-600">
                                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md text-white font-extrabold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 hover:text-indigo-500">
                                    <span>Upload a file</span>
                                    <input id="file-upload"
                                        name="file-upload" type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Input
                    isDisabled
                    type="email"
                    label="Email"
                    defaultValue="junior@nextui.org"
                    className="max-w-xs"
                />
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold rounded p-1">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                    Save
                </button>
            </div>
        </form>
    );
};

export default AddToyForm;