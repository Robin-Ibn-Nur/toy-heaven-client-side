
import { Button } from '@nextui-org/button';
import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const GoogleIcon = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const nevigate = useNavigate();

    const handleGoogle = () => {
        signInWithGoogle().than(res => {
            Swal.fire(
                'Good job!',
                'Welcome to ToyHeaven',
                'success'
            )
            nevigate(from, { replace: true });
        }).catch(err => Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
        )
    }
    return (

        <Button onClick={handleGoogle} className='mt-5' color="danger" fullWidth variant="bordered" startContent={<FcGoogle />}>
            Google
        </Button>
    );
};

export default GoogleIcon;