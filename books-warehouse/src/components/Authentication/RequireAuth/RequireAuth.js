import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Spinner from '../../SharedPages/Spinner/Spinner';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading || sending) {
        return <div className='my-4'><Spinner></Spinner></div>
    }

    if (error) {
        return <p className='text-red-400'>{error.message}</p>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return <div style={{ backgroundColor: '#1F425D' }} className='inline-block my-10 p-10 rounded text-gray-300'>
            <h2 className='text-xl font-semibold'>Your Email isn't verified!!!</h2>
            <h3>Please, Verify your email address</h3>
            <button
                className='bg-gray-300 px-4 py-1 mt-5 rounded font-semibold hover:bg-gray-50'
                style={{ color: '#1F425D' }}
                onClick={ async () => {
                    await sendEmailVerification();
                    toast('Sent new verification email');
                }}
            >
                Send Verification Email
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequireAuth;