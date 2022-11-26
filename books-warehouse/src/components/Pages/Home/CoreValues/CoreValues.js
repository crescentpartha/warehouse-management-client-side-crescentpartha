import React from 'react';
import signature from '../../../../images/signature.svg';

const CoreValues = () => {
    return (
        <div className='py-20 px-5 sm:px-20 md:px-40 lg:px-60 m-5'>
            <h1 className='text-4xl sm:text-5xl font-semibold uppercase pb-3'>Our Core Values</h1>
            <p className='text-sm sm:text-base font-semibold uppercase text-blue-400 pb-4 border-b'>Written by books warehouse CEO</p>
            <p className='text-sm sm:text-base text-center py-4 text-gray-500'>Core values are the fundamental beliefs of a person or organization. The core values are the guiding principles that dictate behavior and action. Core values can help people to know what is right from wrong, they can help companies to determine if they are on the right path and fulfilling their business goals; and they create an unwavering and unchanging guide. There are many different types of core values and many different examples of core values depending upon the context.</p>
            <img className='mx-auto' src={signature} alt="signature" />
        </div>
    );
};

export default CoreValues;