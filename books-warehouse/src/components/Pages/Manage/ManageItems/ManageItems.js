import React from 'react';
import { Link } from 'react-router-dom';
import useBooks from '../../../../hooks/useBooks';
import DisplayManageItems from '../DisplayManageItems/DisplayManageItems';

const ManageItems = () => {
    const [books] = useBooks();
    return (
        <div className='p-5 my-5 border-bottom w-screen'>
            <h2 className='text-4xl sm:text-5xl font-normal uppercase pb-10'>Manage Items</h2>
            <div className='mx-1 sm:mx-5 overflow-auto drop-shadow-sm'>
                <table className='border-2 xl:w-full' width='1280px'>
                    <thead className='bg-gray-50 border-b-2'>
                        <tr className='grid grid-cols-10 gap-4 text-left py-4'>
                            <th className='ml-4'>Image</th>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Ratings</th>
                            <th>Quantity</th>
                            <th>Supplier Name</th>
                            <th>Stock Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y'>
                        {
                            books.map(book => <DisplayManageItems
                                key={book._id}
                                book={book}
                            ></DisplayManageItems>)
                        }
                    </tbody>
                </table>
            </div>
            <div className='mb-5 mt-10'>
                <Link className='bg-blue-700 hover:bg-blue-600 px-5 py-2 rounded text-white' to='/add-item'>Add Items</Link>
            </div>
        </div>
    );
};

export default ManageItems;