
import { Button } from '@nextui-org/button';
import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Provider/AuthProvider';

const GoogleIcon = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const handleGoogle = () => {
        signInWithGoogle().than().catch()
    }
    return (

        <Button onClick={handleGoogle} className='mt-5' color="danger" fullWidth variant="bordered" startContent={<FcGoogle />}>
            Google
        </Button>
    );
};

export default GoogleIcon;