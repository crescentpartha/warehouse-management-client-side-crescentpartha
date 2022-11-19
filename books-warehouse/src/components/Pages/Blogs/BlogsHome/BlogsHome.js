import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../../SharedPages/CustomLinks/CustomLink';

const BlogsHome = () => {
    return (
        <div className='grid grid-cols-8 gap-5'>
            <nav className='order-last border-l w-full col-span-3 flex flex-col gap-2 items-start justify-center p-4 py-10 text-start'>
                <h2 className='pb-5 uppercase font-bold text-3xl'>Recent Post</h2>
                <CustomLink className='hover:underline' to='javascript-vs-node'>What is the difference between JavaScript and Nodejs?</CustomLink>
                <CustomLink className='hover:underline' to='node-vs-mongo'>When should you use Nodejs and when should you use Mongo?</CustomLink>
                <CustomLink className='hover:underline' to='sql-vs-no-sql'>What is the difference between SQL and NoSql databases?</CustomLink>
                <CustomLink className='hover:underline' to='jwt'>What is the purpose of JWT and how does it works?</CustomLink>

                <h2 className='pb-5 uppercase font-bold text-3xl'>Tag</h2>
            </nav>
            <Outlet />
        </div>
    );
};

export default BlogsHome;