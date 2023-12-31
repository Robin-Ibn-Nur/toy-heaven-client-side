import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@nextui-org/button';
import { User } from '@nextui-org/react';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [sortBy, setSortBy] = useState('');

    const fetchToys = async () => {
        const response = await axios.get(`https://toy-heaven-server-side.vercel.app/toys?userEmail=${user?.email}&sortBy=${sortBy}`);
        return response.data;
    };
    const { data: toyData, refetch } = useQuery(['toys', user?.email, sortBy], fetchToys);
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this toy!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://toy-heaven-server-side.vercel.app/toys/${id}`)
                    .then(() => {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                    })
                    .catch(error => {
                        console.error('Error deleting toy:', error);
                    });
            }
        });
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };
    const tableData = [
        "",
        "Toy Name",
        "Category",
        "Description",
        "Price",
        "Quantty",
        "",
    ]
    return (
        <div className="container mx-auto my-10">
            {toyData && toyData.length <= 0 ? (
                <h2 className="text-2xl text-center underline font-bold mb-4">You have no Product</h2>
            ) : (
                <div>
                    <div>
                        <label htmlFor="sort">Sort by Price:</label>
                        <select id="sort" value={sortBy} onChange={handleSortChange}>
                            <option value="">None</option>
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                    <h1 className="text-2xl text-center underline font-bold mb-4">{user?.displayName}</h1>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead>
                            <tr>
                                <td></td>
                                {tableData.map((tdata, index) => <td className="py-2 px-4 border-b" key={index}>{tdata}</td>)}
                            </tr>
                        </thead>
                        <tbody>
                            {toyData?.map((toy) => (
                                <tr key={toy._id}>
                                    <td className="py-2 px-4 border-b">
                                        {/* <button onClick={() => handleDelete(toy._id)} className="btn btn-circle btn-outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button> */}
                                        <Button onClick={() => handleDelete(toy._id)} color="danger" variant="bordered" startContent={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>}>
                                            Delete user
                                        </Button>
                                    </td>
                                    {/* <td className="py-2 px-4 border-b">{toy.sellerName || '-'}</td> */}
                                    <td className="py-2 px-4 border-b">
                                        <User
                                            name={toy?.userEmail || '-'}
                                            description={toy?.toyName || '-'}
                                            avatarProps={{
                                                src: toy?.photo || '-'
                                            }}
                                        />
                                    </td>
                                    <td className="py-2 px-4 border-b">{toy.toyName || '-'}</td>
                                    <td className="py-2 px-4 border-b">{toy.category || '-'}</td>
                                    <td className="py-2 px-4 border-b">{toy?.content && toy.content.split(/\s+/).slice(0, 5).join(" ")} ...</td>
                                    <td className="py-2 px-4 border-b">${toy.price || '-'}</td>
                                    <td className="py-2 px-4 border-b">{toy.quantity || '-'}</td>
                                    <td className="py-2 px-4 border-b">
                                        <Button isDisabled className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full'>
                                            Update
                                        </Button>
                                        {/* <Link to={`/updateToyInfo/${toy._id}`} >Update</Link> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyToys;
