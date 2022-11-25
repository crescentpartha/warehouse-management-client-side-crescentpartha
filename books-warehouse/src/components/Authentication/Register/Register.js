import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/home');
    }

    const onSubmit = data => {
        const { email, password } = data;
        // console.log(data);

        createUserWithEmailAndPassword(email, password);
    }
    // console.log(errors);

    return (
        <div className='bg-gray-200 w-60 sm:w-80 mx-auto my-10 py-5 rounded'>
            <h2 className='text-blue-500 text-2xl font-semibold'>Create your account</h2>

            <SocialLogin></SocialLogin>

            <form className='flex flex-col gap-2 p-5' onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='py-2 px-2 mb-2 rounded'
                    placeholder='Name'
                    type="text"
                    {...register("name", {
                        required: "Name is required",
                        maxLength: 20,
                        pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: 'Name is invalid'
                        }
                    })}
                />
                <p className='text-red-400'>{errors?.name?.message}</p>
                <input
                    className='py-2 px-2 mb-2 rounded'
                    placeholder='Email'
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Email is invalid"
                        }
                    })}
                />
                <p className='text-red-400'>{errors?.email?.message}</p>
                <input
                    className='py-2 px-2 mb-2 rounded'
                    placeholder='Password'
                    type="password"
                    {...register("password", {
                        required: "Password is required",
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/,
                            message: "At least one [a-z][A-Z][0-9][!@#$%^&*] from each categories"
                        }
                    })}
                />
                {
                    loading && <p className='text-red-400'>Loading...</p>
                }
                {
                    error && <p className='text-red-400'>{error.message}</p>
                }
                <p className='text-red-400'>{errors?.password?.message}</p>
                <input
                    className='py-2 px-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold'
                    type="submit"
                    value="Register"
                />
                <p className='flex items-center justify-between text-blue-600'>
                    <Link to='/login'>Login?</Link>
                    <Link to='/retrieve-password'>Forgot Password?</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;