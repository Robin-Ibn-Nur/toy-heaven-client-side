import React from 'react';

import AddToyForm from './AddToyForm';
const AddToys = () => {

    return (
        <div className=' bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg'>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: "center" }}>Add Your Favorite Toy Here</h1>
            <AddToyForm />
        </div>
    );
};

export default AddToys;
