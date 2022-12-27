import React from 'react';
import axios from 'axios';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Spinner from '../../SharedPages/Spinner/Spinner';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    if (user) {
        // navigate(from, { replace: true });
    }

    const onSubmit = async data2 => {
        const { email, password } = data2;
        // console.log(data2);

        await signInWithEmailAndPassword(email, password);
        
        // Create JWT Token, Get jwt token on client side
        const {data} = await axios.post('https://books-warehouse-management-server-side-crescentpartha.vercel.app/login', {email});
        // console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }
    // console.log(errors);

    return (
        <div className='bg-gray-200 w-60 sm:w-80 mx-auto my-10 py-5 rounded'>
            <h2 className='text-blue-500 text-2xl font-semibold'>Login your account</h2>

            <SocialLogin></SocialLogin>

            <form className='flex flex-col gap-2 p-5' onSubmit={handleSubmit(onSubmit)}>
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
                    // loading && <p className='text-red-400'>Loading...</p>
                    loading && <Spinner></Spinner>
                }
                {
                    error && <p className='text-red-400'>{error.message}</p>
                }
                <p className='text-red-400'>{errors?.password?.message}</p>
                <input
                    className='py-2 px-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold'
                    type="submit"
                    value="Login"
                />
                <p className='flex items-center justify-between text-blue-600'>
                    <Link to='/register'>Register?</Link>
                    <Link to='/retrieve-password'>Forgot Password?</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;