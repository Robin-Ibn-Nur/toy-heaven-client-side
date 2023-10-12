import React, { useState } from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Textarea } from '@nextui-org/react';
import addToyBg from "./toyBg.jpg";
const AddToys = () => {
    const [value, setValue] = useState("");
    const [selectedKeys, setSelectedKeys] = useState(new Set(["Marvel"]));
    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );
    const handleForm = (event) => {
        event.preventDefault();
        console.log(event.target);
    }
    const categoryName = [
        "Marvel",
        "Avengers",
        "Star Wars",
        "Transformers",
    ]
    return (
        <div className=' bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg'>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Add Your Favorite Toy Here</h1>
            <form onSubmit={handleForm} className='container mx-auto'>
                <div className="space-y-6">
                    <div className='flex space-x-40'>
                        <div>
                            <label htmlFor="toyname" className="text-sm font-semibold text-gray-200">Toy Name</label>
                            <div className="mt-2 flex rounded-md shadow-sm">
                                <Input
                                    isClearable
                                    radius="lg"
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
                                // startContent={
                                //     <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                                // }
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="toyname" className="text-sm font-semibold text-gray-200">Price</label>
                            <div className="mt-2 flex rounded-md shadow-sm">
                                <Input
                                    isClearable
                                    radius="lg"
                                    type='number'
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
                            <label htmlFor="toyname" className="text-sm font-semibold text-gray-200">Rating</label>
                            <div className="mt-2 flex rounded-md shadow-sm">
                                <Input
                                    isClearable
                                    radius="lg"
                                    type='number'
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
                        <label htmlFor="toyname" className="text-sm font-semibold text-gray-200">Select Your Toy Category</label>
                        <div className="mt-2">
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button
                                        variant="bordered"
                                        className="capitalize w-full py-2 px-4 text-white rounded-md shadow-md"
                                    >
                                        {selectedValue}
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu
                                    aria-label="Single selection example"
                                    variant="flat"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    selectedKeys={selectedKeys}
                                    onSelectionChange={setSelectedKeys}
                                >
                                    {categoryName.map((item) => (
                                        <DropdownItem key={item}>{item}</DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="about" className="text-sm font-semibold text-gray-200">About</label>
                        <div className="mt-2">
                            <Textarea
                                variant="underlined"
                                color='white'
                                labelPlacement="outside"
                                placeholder="Enter your product description here ..."
                                value={value}
                                onValueChange={setValue}
                            />
                            <p className="text-white text-sm">Write a few sentences about your product: {value}</p>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="cover-photo" className="text-sm font-semibold text-gray-200">Cover Photo</label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white-25 px-6 py-10">
                            <div className="text-center">
                                <div className="mt-4 flex text-sm text-gray-600">
                                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md text-white font-extrabold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 hover:text-indigo-500">
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
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
                    <button type="button" className="text-sm font-semibold rounded p-1">Cancel</button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddToys;
