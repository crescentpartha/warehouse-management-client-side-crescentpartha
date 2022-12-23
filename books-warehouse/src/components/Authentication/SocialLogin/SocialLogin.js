import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <button onClick={() => signInWithGoogle()} className='flex items-center justify-center gap-4 bg-blue-400 hover:bg-blue-500 py-2 mx-auto my-4 rounded w-10/12'>
                <img width={25} src={google} alt="google logo" />
                <span className='text-white text-lg font-semibold uppercase'>Google</span>
            </button>

            {error && <p className='text-red-400'>{error.message}</p>}
            {loading && <p className='text-red-400'>Loading...</p>}

            <div className='flex flex-row flex-nowrap items-center justify-center mx-5'>
                <hr width='44%' className='h-1 bg-slate-50' />
                <p className='mx-2 text-gray-50 text-lg font-semibold'>or</p>
                <hr width='44%' className='h-1 bg-slate-50' />
            </div>
        </div>
    );
};

export default SocialLogin;