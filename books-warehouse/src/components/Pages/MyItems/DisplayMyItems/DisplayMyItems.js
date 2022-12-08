import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DisplayMyItems = ({ order }) => {
    const { name, img, author, price, quantity, supplier_name } = order;
    const [hoverEffect, setHoverEffect] = useState(false);

    const handleDelete = (id) => {
        toast('Delete button clicked');
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