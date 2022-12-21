import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useBooks from '../../../../hooks/useBooks';
import DisplayManageItems from '../DisplayManageItems/DisplayManageItems';

const ManageItems = () => {
    const [books, setBooks] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [productSize, setProductSize] = useState(5);

    // Load data based on the currentPage and productSize;
    useEffect(() => {
        fetch(`http://localhost:5000/book?currentPage=${currentPage}&productSize=${productSize}`)
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [currentPage, productSize]);

    useEffect( () => {
        fetch('http://localhost:5000/bookCount')
        .then(res => res.json())
        .then(data => {
            const count = data.count;
            const pages = Math.ceil(count/productSize);
            setPageCount(pages);
        })
    }, [productSize]);

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
            <div className='mt-10'>
                {
                    [...Array(pageCount).keys()]
                    .map(number => <button 
                        onClick={() => setCurrentPage(number)}
                        className={
                            currentPage === number ? 'bg-orange-300 border-gray-300 text-gray-50 font-semibold border-2 rounded px-3 py-2 mx-1' 
                            : 'bg-gray-200 border-orange-300 text-orange-300 border-2 rounded px-3 py-2 mx-1 font-semibold'
                        }
                    >{number + 1}</button>)
                }
                <select 
                    defaultValue={5} 
                    onChange={e => setProductSize(e.target.value)} 
                    className='bg-gray-200 border-orange-300 text-orange-300 border-2 rounded px-1 py-2 mx-1 font-semibold'
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
            <div className='mb-5 mt-10'>
                <Link className='bg-blue-700 hover:bg-blue-600 px-5 py-2 rounded text-white' to='/add-item'>Add Items</Link>
            </div>
        </div>
    );
};

export default ManageItems;