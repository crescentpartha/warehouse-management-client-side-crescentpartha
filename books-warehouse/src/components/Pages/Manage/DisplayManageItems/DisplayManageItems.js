import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const DisplayManageItems = ({ book }) => {
    const [hoverEffect, setHoverEffect] = useState(false);
    const { name, img, author, description, price, ratings, quantity, supplier_name } = book;
    // console.log(book);

    const handleDelete = () => {

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
                    onClick={() => handleDelete()}
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