import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube, FaWordpress } from 'react-icons/fa';
import logo from '../../../images/logo.png';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div style={{ backgroundColor: '#1F425D' }} className='text-gray-400'>
            <div className='grid grid-cols-1 md:grid-cols-2  xl:grid-cols-5 gap-10 px-5 sm:px-20 py-10 sm:py-20'>
                <div className='flex flex-col items-start xl:col-span-2 text-start'>
                    <Link className='flex items-center justify-start flex-nowrap pb-2' to='/'>
                        <img className='w-9 mr-2' src={logo} alt="logo" />
                        <p className='text-lg font-bold uppercase text-white'>Books Warehouse</p>
                    </Link>
                    <p className='text-start'>Our warehousing is regularly audited and analyzed to ensure that it meets the contemporary business models, and help our clients meet their logistic requirements efficiently.</p>
                    <div style={{ color: '#1F425D' }} className='flex flex-nowrap items-center justify-start gap-2 pt-2'>
                        <span className='bg-gray-400 hover:bg-gray-50 p-2 sm:p-3 rounded'>
                            <FaFacebookF className='text-xl' />
                        </span>
                        <span className='bg-gray-400 hover:bg-gray-50 p-2 sm:p-3 rounded'>
                            <FaTwitter className='text-xl' />
                        </span>
                        <span className='bg-gray-400 hover:bg-gray-50 p-2 sm:p-3 rounded'>
                            <FaWordpress className='text-xl' />
                        </span>
                        <span className='bg-gray-400 hover:bg-gray-50 p-2 sm:p-3 rounded'>
                            <FaYoutube className='text-xl' />
                        </span>
                    </div>
                </div>
                <div className='flex flex-col items-start text-start'>
                    <h2 className='text-white font-bold uppercase text-lg pb-2'>Navigation</h2>
                    <Link className='hover:underline' to='/home'>Home</Link>
                    <Link className='hover:underline' to='/manage'>Manage items</Link>
                    <Link className='hover:underline' to='/my-items'>My items</Link>
                    <Link className='hover:underline' to='/blogs'>Blogs</Link>
                </div>
                <div className='flex flex-col items-start text-start'>
                    <h2 className='text-white font-bold uppercase text-lg pb-2'>Our Services</h2>
                    <p className='hover:underline'>All Services</p>
                    <p className='hover:underline'>Ground Transport</p>
                    <p className='hover:underline'>Cargo</p>
                    <p className='hover:underline'>Warehousing</p>
                    <p className='hover:underline'>Logistic Service</p>
                    <p className='hover:underline'>Trucking Service</p>
                    <p className='hover:underline'>Storage</p>
                </div>
                <div className='flex flex-col items-start text-start'>
                    <h2 className='text-white font-bold uppercase text-lg pb-2'>Payment Methods</h2>
                    <p className='hover:underline'>Business Card</p>
                    <p className='hover:underline'>Shop with Points</p>
                    <p className='hover:underline'>Reload your Balance</p>
                    <p className='hover:underline'>Currency Converter</p>
                </div>
            </div>
            <div className='lg:flex align-center justify-between px-5 sm:px-20 py-5 text-gray-400 text-sm' style={{ backgroundColor: '#162E41' }}>
                <p className='py-1'><span className='text-white font-bold'>Books Warehouse</span> Made by Crescent Partha</p>
                <p className='py-1'>Copyright &copy; 2015-{date} <span className='hover:text-white'>Books Warehouse</span>. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;