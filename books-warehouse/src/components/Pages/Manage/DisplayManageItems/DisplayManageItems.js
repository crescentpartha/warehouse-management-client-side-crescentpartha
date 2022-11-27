import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const DisplayManageItems = ({ book }) => {
    const {name, img, author, price, ratings, quantity, supplier_name } = book;
    // console.log(book);

    const handleDelete = () => {

    }
    return (
        <tr className='grid grid-cols-7 gap-4 items-center justify-items-start text-start border-b-2'>
            <td>{name}</td>
            <td>{author}</td>
            <td>{price}</td>
            <td>{ratings}</td>
            <td>{quantity}</td>
            <td>{supplier_name}</td>
            <td>
                <button className='hover:bg-red-400 border-2 border-red-400 rounded m-2' onClick={() => handleDelete()}>
                    <FaTrashAlt className='text-xl m-3 text-red-400 hover:text-gray-300' />
                </button>
            </td>
        </tr>
    );
};

export default DisplayManageItems;