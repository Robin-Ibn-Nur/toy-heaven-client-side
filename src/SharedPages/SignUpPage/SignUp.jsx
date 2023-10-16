import React, { useContext } from 'react';
import { Button, Input, Link } from "@nextui-org/react";
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import GoogleIcon from '../../Components/Icons/GoogleIcon';
import { Divider } from "@nextui-org/react";
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
const SignUp = ({ setSelected }) => {

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data.photo);
        createUser(data?.email, data?.password)
            .then(result => {
                if (result.operationType) {
                    updateUserProfile(data?.name, data?.photo)
                        .then(() => {
                            Swal("Good job!", "You have successfully register!", "success");
                            navigate(from, { replace: true });
                        })
                        .catch(error => { })
                }
            })
            .catch(error => {
                if (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!'
                    })
                }
            })
        reset()
    };
    return (
        <div className='h-auto'>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <Input isRequired label="Name" placeholder="Enter your name" type="text" {...register('name', { required: true })} />
                <Input isRequired label="Photo Url" placeholder="Submit your photo URL" type="text" {...register('photo', { required: true })} />
                <Input isRequired label="Email" placeholder="Enter your email" type="email" {...register('email', { required: true })} />
                <Input
                    isRequired
                    {...register('password', { required: true })}
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                />
                <Input
                    isRequired
                    {...register('confirmPassword', {
                        required: true,
                        validate: (value) => value === watch('password'),
                    })}
                    label="Confirme Password"
                    placeholder="Confirme your password"
                    type="password"
                />
                <p className="text-center cursor-pointer text-small">
                    Already have an account?{" "}
                    <Link size="sm" onPress={() => setSelected("login")}>
                        Login
                    </Link>
                </p>
                <div className="flex gap-2 justify-end">
                    <Button type='submit' fullWidth color="primary">
                        Sign up
                    </Button>
                </div>
                <Divider orientation="horizontal" />
            </form>
            <GoogleIcon />
        </div>
    );
};

export default SignUp;