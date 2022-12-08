import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaTrashAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../../firebase.init';
import useLoadEmailOrderedBooks from '../../../../hooks/useLoadEmailOrderedBooks';

const DisplayMyItems = ({ order }) => {
    const { name, img, author, price, quantity, supplier_name } = order;
    const [hoverEffect, setHoverEffect] = useState(false);
    
    const [user] = useAuthState(auth);
    // console.log(user.email);
    const [emailOrders, setEmailOrders] = useLoadEmailOrderedBooks(user.email);

    const handleDelete = id => {
        // console.log(id);
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            console.log('Deleting ordered book with id =', id);

            // DELETE a ordered book data from client-side and send to the server-side
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    // console.log(data?.deletedCount);
                    if (data.deletedCount > 0) {
                        console.log('Deleted');
                        // remove deleted ordered book data from the state in client-side for better user experience
                        const remaining = emailOrders.filter(emailOrder => emailOrder._id !== id);
                        setEmailOrders(remaining);
                    }
                });
            toast('Successfully delete a book item.');
        }
        else {
            toast('Thanks for your consideration.');
        }
    }

    return (
        <tr className='grid grid-cols-7 gap-4 items-center justify-items-start text-start py-1'>
            <td><img className='w-full p-4' src={img} alt={name} /></td>
            <td>{name}</td>
            <td>{author}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>{supplier_name}</td>
            <td>
                <button
                    className='hover:bg-red-400 border-2 border-red-400 rounded my-2'
                    onClick={() => handleDelete(order._id)}
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

export default DisplayMyItems;