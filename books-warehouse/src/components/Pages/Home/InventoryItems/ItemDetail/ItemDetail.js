import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import useLoadSingleBookItem from '../../../../../hooks/useLoadSingleBookItem';

const ItemDetail = () => {
    const { itemDetailId } = useParams();
    const [book] = useLoadSingleBookItem(itemDetailId);
    // console.log(book);
    const { name, author, description, img, price, quantity, ratings, supplier_name } = book;
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <div className='py-16 px-10'>
                <div className='grid grid-cols-10 gap-4'>
                    <div className='col-span-2 bg-slate-100'>
                        <img className='mx-auto' src={img} alt={name} />
                        <button className='bg-blue-700 hover:bg-blue-600 px-5 py-2 my-5 rounded inline-block mx-auto text-white'>Delivered</button>
                    </div>
                    <div className='col-span-8 bg-slate-200 text-start p-4'>
                        <h2>{name}</h2>
                        <p><span>Author: </span>{author}</p>
                        <p><span>Publisher: </span>{supplier_name}</p>
                        <p><span>Price: </span>${price}</p>
                        <p><span>Quantity: </span>{quantity}</p>
                        <p className='flex flex-nowrap items-center justify-start gap-1 text-yellow-600'>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                            <span className='text-black'>({ratings})</span>
                        </p>
                        <p className='text-justify'>{description}</p>
                    </div>
                </div>
            </div>
            <div className='py-5 bg-gray-50 p-5 m-5 rounded'>
                <h2 className='text-xl uppercase font-semibold'>Restock the Item</h2>
                <form className='flex items-center justify-around gap-2 mx-auto w-80' onSubmit={handleSubmit(onSubmit)}>
                    {/* Quantity */}
                    <div className='text-start w-1/2'>
                        {/* <label className='font-semibold pb-2' htmlFor="">Quantity</label> <br /> */}
                        <input
                            style={{ border: '1px solid #d6d6d6' }}
                            className='d-block w-full px-2 py-1 rounded'
                            placeholder='Quantity'
                            type="number"
                            {...register("quantity", {
                                required: "Quantity is required",
                                maxLength: 8,
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: 'Quantity is invalid'
                                }
                            })}
                        />
                        <p className='text-red-400'>{errors?.quantity?.message}</p>
                    </div>

                    {/* Restock Item */}
                    <div className='bg-blue-700 hover:bg-blue-600 px-5 py-2 my-5 rounded inline-block mx-auto text-white cursor-pointer'>
                        <input
                            className='d-block btn btn-primary'
                            type="submit"
                            value="Restock Item"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ItemDetail;