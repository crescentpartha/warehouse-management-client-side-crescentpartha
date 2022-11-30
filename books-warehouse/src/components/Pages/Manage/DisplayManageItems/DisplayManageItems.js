import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useBooks from '../../../../hooks/useBooks';

const DisplayManageItems = ({ book }) => {
    const [books, setBooks] = useBooks();
    const [hoverEffect, setHoverEffect] = useState(false);
    const { name, img, author, description, price, ratings, quantity, supplier_name } = book;
    // console.log(book);

    const navigate = useNavigate();
    const handleNavigateToItemDetail = id => {
        navigate(`/bookItem/${id}`);
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            console.log('Deleting book with id =', id);

            // delete a book in client-side and send to the server-side
            const url = `http://localhost:5000/book/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    // console.log(data?.deletedCount);
                    if (data.deletedCount > 0) {
                        console.log('Deleted');
                        // remove deleted service from the state in client-side for better user experience
                        const remaining = books.filter(book => book._id !== id);
                        setBooks(remaining);
                    }
                });
            toast('Successfully delete a book item.');
        }
        else {
            toast('Thanks for your consideration.');
        }
    }

    return (
        <tr className='grid grid-cols-10 gap-4 items-center justify-items-start text-start py-1'>
            <td><img className='w-full p-4' src={img} alt={name} /></td>
            <td>{name}</td>
            <td>{author}</td>
            <td title={description} className='text-justify'>{description.length > 90 ? description.slice(0, 90) + "..." : description}</td>
            <td>${price}</td>
            <td>{ratings}</td>
            <td>{quantity}</td>
            <td>{supplier_name}</td>
            <td>
                <button
                    onClick={() => handleNavigateToItemDetail(book._id)}
                    className='text-blue-400 mt-2'
                >Stock Update</button>
            </td>
            <td>
                <button
                    className='hover:bg-red-400 border-2 border-red-400 rounded my-2'
                    onClick={() => handleDelete(book._id)}
                    onMouseEnter={() => setHoverEffect(true)}
                    onMouseLeave={() => setHoverEffect(false)}
                >
                    {
                        hoverEffect === true
                            ? <FaTrashAlt className='text-xl m-3 text-gray-100' />
                            : <FaTrashAlt className='text-xl m-3 text-red-400' />
                    }
                </button>
            </td>
            <ToastContainer />
        </tr>
    );
};

export default DisplayManageItems;