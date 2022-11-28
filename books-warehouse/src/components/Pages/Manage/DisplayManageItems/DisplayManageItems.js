import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import useBooks from '../../../../hooks/useBooks';

const DisplayManageItems = ({ book }) => {
    const [books, setBooks] = useBooks();
    const [hoverEffect, setHoverEffect] = useState(false);
    const { name, img, author, description, price, ratings, quantity, supplier_name } = book;
    // console.log(book);

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
        }
    }

    return (
        <tr className='grid grid-cols-9 gap-4 items-center justify-items-start text-start py-1'>
            <td><img className='w-full p-4' src={img} alt={name} /></td>
            <td>{name}</td>
            <td>{author}</td>
            <td title={description} className='text-justify'>{description.length > 200 ? description.slice(0, 100) + "..." : description}</td>
            <td>${price}</td>
            <td>{ratings}</td>
            <td>{quantity}</td>
            <td>{supplier_name}</td>
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
        </tr>
    );
};

export default DisplayManageItems;