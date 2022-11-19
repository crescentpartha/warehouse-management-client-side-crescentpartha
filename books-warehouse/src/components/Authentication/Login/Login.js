import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import google from '../../../images/google.png';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    // console.log(errors);

    return (
        <div className='bg-gray-200 w-60 sm:w-80 mx-auto my-10 py-5 rounded'>
            <h2 className='text-blue-500 text-2xl font-semibold'>Login your account</h2>

            <button className='flex items-center justify-center gap-4 bg-blue-400 hover:bg-blue-500 py-2 mx-auto my-4 rounded w-10/12'>
                <img width={25} src={google} alt="google logo" />
                <span className='text-white text-lg font-semibold uppercase'>Google</span>
            </button>

            <div className='flex flex-row flex-nowrap items-center justify-center mx-5'>
                <hr width='44%' className='h-1 bg-slate-50' />
                <p className='mx-2 text-gray-50 text-lg font-semibold'>or</p>
                <hr width='44%' className='h-1 bg-slate-50' />
            </div>

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