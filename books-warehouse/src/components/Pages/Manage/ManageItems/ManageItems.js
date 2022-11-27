import React from 'react';
import useBooks from '../../../../hooks/useBooks';
import DisplayManageItems from '../DisplayManageItems/DisplayManageItems';

const ManageItems = () => {
    const [books] = useBooks();
    return (
        <div className='p-5 my-5 border-bottom w-screen'>
            <h2 className='text-4xl sm:text-5xl font-semibold uppercase pb-10'>Manage Items</h2>
            <div className='mx-5'>
                <table className='table-auto md:table-fixed overflow-x-scroll'>
                    <thead className='bg-gray-50 border-b-2'>
                        <tr className='grid grid-cols-7 gap-4 text-left'>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Ratings</th>
                            <th>Quantity</th>
                            <th>Supplier Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map(book => <DisplayManageItems
                                key={book._id}
                                book={book}
                            ></DisplayManageItems>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;