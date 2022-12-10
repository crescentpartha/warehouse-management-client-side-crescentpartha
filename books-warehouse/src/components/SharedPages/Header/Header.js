import React, { useState } from 'react';
import logo from '../../../images/logo.png';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }

    return (
        <header className='border-b border-gray-300 bg-white py-2 sticky top-0 z-10'>
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
                            <Link className='lg:px-5 py-2 font-semibold hover:text-blue-400 block' to="/home">Home</Link>
                        </li>
                        <li>
                            <Link className='lg:px-5 py-2 font-semibold hover:text-blue-400 block' to="/blogs/javascript-vs-node">Blogs</Link>
                        </li>
                        <li>
                            { user && <Link className='lg:px-5 py-2 font-semibold hover:text-blue-400 block' to="/manage">Manage Items</Link> }
                        </li>
                        <li>
                            { user && <Link className='lg:px-5 py-2 font-semibold hover:text-blue-400 block' to="/add-item">Add Item</Link> }
                        </li>
                        <li>
                            { user && <Link className='lg:px-5 py-2 font-semibold hover:text-blue-400 block' to="/my-items">My Items</Link> }
                        </li>
                        <li>
                            {
                                user ? <button className='lg:px-6 py-2 px-2 bg-blue-700 hover:bg-blue-600 text-white rounded-full block text-center mx-auto' onClick={logout}>Sign Out</button>
                                    :
                                    <>
                                        <Link className='lg:px-6 py-2 px-2 bg-blue-700 hover:bg-blue-600 text-white rounded-full block text-center' to="/login">Login</Link>
                                    </>
                            }
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;