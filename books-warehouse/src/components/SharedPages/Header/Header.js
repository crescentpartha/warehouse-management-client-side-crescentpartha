import React, { useState } from 'react';
import logo from '../../../images/logo.png';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className='border-b border-gray-300 py-2'>
            <div className='flex items-center justify-between container px-4 mx-auto flex-wrap w-full'>
                <div>
                    <Link className='flex items-center justify-between' to='/'>
                        <img className='w-9 mr-2' src={logo} alt="logo" />
                        <p className='text-lg font-semibold'>Books Warehouse</p>
                    </Link>
                </div>

                <FaBars className='lg:hidden block h-6 w-6 cursor-pointer' onClick={() => setOpen(!open)} />

                <nav className={`${open ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full`}>
                    <ul className='lg:flex lg:items-center lg:justify-between text-base text-gray-700'>
                        <li>
                            <Link className='lg:px-5 py-2 font-semibold hover:text-blue-700 block' to="/home">Home</Link>
                        </li>
                        <li>
                            <Link className='lg:px-5 py-2 font-semibold hover:text-blue-700 block' to="/manage">Manage</Link>
                        </li>
                        <li>
                            <Link className='lg:px-5 py-2 font-semibold hover:text-blue-700 block' to="/blogs/javascript-vs-node">Blogs</Link>
                        </li>
                        <li>
                            <Link className='lg:px-6 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-full block text-center' to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;