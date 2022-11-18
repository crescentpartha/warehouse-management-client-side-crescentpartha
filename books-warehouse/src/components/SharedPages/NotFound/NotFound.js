import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../images/notFound.png';

const NotFound = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-5 md:gap-15 lg:gap-20 m-10 sm:px-10 md:px-20'>
                <img className='w-80' src={notFound} alt="This is 404 logo" />
                <div className='text-gray-400 font-thin text-start'>
                    <p className='text-6xl sm:text-9xl uppercase'>Sorry</p>
                    <p className='text-xl sm:text-3xl lg:text-4xl xl:text-5xl'>we couldn't find the page</p>
                    <p className='text-lg sm:text-2xl lg:text-3xl'>you're looking for.</p>
                    <p className='text-gray-900 text-base sm:text-lg font-semibold'>Go to <Link className='text-blue-600' to='/home'>Books Warehouse's home page.</Link></p>
                </div>

            </div>
        </div>
    );
};

export default NotFound;