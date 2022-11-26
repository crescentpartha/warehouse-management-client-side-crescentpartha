import React from 'react';
import { FaStar, FaStarHalfAlt, FaCheckCircle } from 'react-icons/fa';

const Item = ({ book }) => {
    const { name, img, author, price, ratings, quantity, supplier_name } = book;
    return (
        <div className='bg-white p-5 border ml-1 mb-1'>
            <img className='mx-auto' src={img} alt={name} />
            <div className='mt-2'>
                <h2 className='font-semibold'>{name}</h2>
                <p><span className='italic'>{author}</span> (Author)</p>
                <p>Publisher: <span className='italic'>{supplier_name}</span></p>
                <p className='font-bold text-yellow-600'>{price}</p>
                <p className='flex flex-nowrap items-center justify-center gap-1 text-yellow-600'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /> <span className='text-black'>({ratings})</span></p>
                <p className='flex flex-nowrap items-center justify-center gap-1'><span className='text-green-400'><FaCheckCircle /></span> In Stock ({quantity}+ copies available)</p>
                <button className='text-blue-400 mt-2'>Stock Update</button>
            </div>
        </div>
    );
};

export default Item;