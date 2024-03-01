import { Button, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { SearchIcon } from './SearchIcon';
import { columns } from './data';
import axios from 'axios';

const SearchAndTable = ({ renderCell }) => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        axios.get("https://toy-heaven-server-side.vercel.app/alltoys")
            .then(response => {
                setToys(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    console.log(toys);


    const handleSearch = async () => {
        try {
            const response = await fetch(`https://toy-heaven-server-side.vercel.app/getToyNameByText/${searchText}`);
            const data = await response.json();
            console.log(data);
            setToys(data);
        } catch (error) {
            console.error('Error searching toys:', error);
        }
    };
    return (
        <div>

            <div className="container mx-auto my-10 w-full h-[240px] px-8 rounded-2xl flex flex-col justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                <h3 className="mb-5 text-xl">Search your favourite toy here</h3>
                <div className='flex items-center justify-center space-x-5 w-full'>
                    <Input
                        className='w-2/4'
                        label="Search"
                        onChange={(e) => setSearchText(e.target.value)}
                        type="text"
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
                        placeholder="Toy name here..."
                        startContent={
                            <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                        }
                    />
                    <Button onClick={handleSearch} className='p-[26px] w-[10px]' color="primary" variant="shadow">
                        Search
                    </Button>
                </div>
            </div>

            <Table aria-label="Example table with custom cells">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={toys}>
                    {toys.map((item) => (
                        <TableRow key={item._id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </div>
    );
};

export default SearchAndTable;