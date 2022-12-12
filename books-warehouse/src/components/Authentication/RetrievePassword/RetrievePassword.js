import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';

const RetrievePassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const onSubmit = async (data) => {
        // console.log(data);
        const { email } = data;
        await sendPasswordResetEmail(email);
        toast('Sent an email to reset your Password');
        // console.log('Sending email to reset password!');
    }
    // console.log(errors);

    return (
        <div className='bg-gray-200 w-60 sm:w-80 mx-auto my-10 py-5 rounded'>
            <h2 className='text-blue-500 text-2xl font-semibold'>Retrieve your password</h2>

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
                {
                    sending && <p className='text-red-400'>Sending...</p>
                }
                {
                    error && <p className='text-red-400'>{error.message}</p>
                }
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
            <ToastContainer />
        </div>
    );
};

export default RetrievePassword;