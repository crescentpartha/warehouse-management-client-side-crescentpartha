import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const RetrievePassword = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className='bg-gray-200 w-60 sm:w-80 mx-auto my-10 py-5 rounded'>
            <h2 className='text-blue-500 text-2xl font-semibold'>Retrieve your password</h2>

            <form className='flex flex-col gap-2 p-5' onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='py-2 px-2 mb-2 rounded'
                    placeholder='Email'
                    type="email"
                    {...register("email", { required: true })}
                />
                <input
                    className='py-2 px-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold'
                    type="submit"
                    value="Submit"
                />
                <p className='flex items-center justify-between text-blue-600'>
                    <Link to='/login'>Login?</Link>
                    <Link to='/register'>Register?</Link>
                </p>
            </form>
        </div>
    );
};

export default RetrievePassword;