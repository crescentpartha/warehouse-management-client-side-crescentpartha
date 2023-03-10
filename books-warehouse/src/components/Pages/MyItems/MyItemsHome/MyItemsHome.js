import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import useLoadEmailOrderedBooks from '../../../../hooks/useLoadEmailOrderedBooks';
import DisplayMyItems from '../DisplayMyItems/DisplayMyItems';
import auth from '../../../../firebase.init';
import PageTitle from '../../../SharedPages/PageTitle/PageTitle';

const MyItemsHome = () => {
    const [user] = useAuthState(auth);
    // console.log(user.email);
    const [emailOrders] = useLoadEmailOrderedBooks(user.email);
    return (
        <div className='p-5 my-5 border-bottom w-screen'>
            <PageTitle title="My Items"></PageTitle>
            <h2 className='text-4xl sm:text-5xl font-normal uppercase pb-10'>My Items</h2>
            <div className='mx-1 sm:mx-5 overflow-auto drop-shadow-sm'>
                <table className='border-2 xl:w-full' width='1280px'>
                    <thead className='bg-gray-50 border-b-2'>
                        <tr className='grid grid-cols-7 gap-4 text-left py-4'>
                            <th className='ml-4'>Image</th>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Supplier Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y'>
                        {
                            emailOrders?.map(order => <DisplayMyItems
                                key={order._id}
                                order={order}
                            ></DisplayMyItems>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyItemsHome;