import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useLoadSingleBookItem from '../../../../../hooks/useLoadSingleBookItem';
import auth from '../../../../../firebase.init';
import useOrders from '../../../../../hooks/useOrders';
import useLoadSingleOrderedBookItems from '../../../../../hooks/useLoadSingleOrderedBookItem';

const ItemDetail = () => {
    const { itemDetailId } = useParams();
    const [user] = useAuthState(auth);
    // console.log(user.email);

    const [orders] = useOrders();
    // console.log(orders);

    /* const allOrdersForThisProductEmail = orders.find(orderData => (orderData.oldId === itemDetailId && orderData.email === user.email));
    // const { _id: orderId } = allOrdersForThisProductEmail;
    // const orderId = allOrdersForThisProductEmail._id;
    // console.log(allOrdersForThisProductEmail._id);
    const [order] = useLoadSingleOrderedBookItems(allOrdersForThisProductEmail?._id);
    console.log(order); */

    const [book] = useLoadSingleBookItem(itemDetailId);
    // console.log(book);
    let { name, author, description, img, price, quantity, ratings, supplier_name } = book;
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleDelivered = (id) => {
        // Update existing book data from client-side to server-side for bookCollection
        const data = {
            quantity: quantity - 1
        }
        // console.log(data);

        // Insert ordered book data from client-side to server-side for orderCollection
        const orderData = {
            oldId: itemDetailId,
            name: name,
            author: author,
            email: user.email,
            description: description,
            img: img,
            price: price,
            quantity: 1,
            ratings: ratings,
            supplier_name: supplier_name
        }
        // console.log(orderData);

        // Update existing ordered book data from client-side to server-side for orderCollection
        // const orderDataUpdate = {
        //     quantity: 1
        // }
        // console.log(orderDataUpdate);

        const proceed = window.confirm('Are you sure want to buy this book?');
        if (proceed) {
            // Update a book item in the client-side and send to the server-side for bookCollection
            const url = `http://localhost:5000/book/${id}`;
            // console.log(url, id);
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    // console.log('success', result);
                    toast('Book order successfully done!!!');
                });

            /* ------------------------------------------------- */

            // POST a ordered book data from client-side to server-side for orderCollection
            const url2 = `http://localhost:5000/order`;
            fetch(url2, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderData)
            })
                .then(res => res.json())
                .then(result => {
                    // console.log(result);
                })
        }
    };

    const onSubmit = (restock) => {
        // console.log(restock);
        const data = {
            quantity: parseInt(quantity) + parseInt(restock.quantity)
        }
        // console.log(data);

        // Update a book item in the client-side and send to the server-side
        const url = `http://localhost:5000/book/${itemDetailId}`;
        // console.log(url, id);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                // console.log('success', result);
                toast('Restock the book item is successfully done!!!');
            });
    }

    return (
        <div className='py-4 sm:py-10 px-4 sm:px-10'>
            <div className='grid grid-cols-1 md:grid-cols-10 gap-4 py-5 bg-gray-50 p-5 m-5 rounded'>
                <div className='md:col-span-2'>
                    <div className='bg-gray-100 rounded hover:bg-gray-200'>
                        <img className='mx-auto px-2 py-5 md:py-2' src={img} alt={name} />
                    </div>
                    <button onClick={() => handleDelivered(book._id)} className='bg-blue-700 hover:bg-blue-600 px-5 py-2 my-5 rounded inline-block mx-auto text-white'>Delivered</button>
                </div>
                <div className='md:col-span-8 bg-gray-100 rounded text-start p-4'>
                    <h2 className='font-semibold capitalize text-green-500'>{name}</h2>
                    <p><span className='font-semibold'>Author: </span><span className='italic'>{author}</span></p>
                    <p><span className='font-semibold'>Publisher: </span><span className='italic'>{supplier_name}</span></p>
                    <p><span className='font-semibold'>Price: </span><span className='italic'>${price}</span></p>
                    <p><span className='font-semibold'>Quantity: </span><span className='italic'>{quantity}</span></p>
                    <p className='flex flex-nowrap items-center justify-start gap-1 text-yellow-400'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                        <span className='text-black'>({ratings}) ratings</span>
                    </p>
                    <p className='text-justify mt-3'>{description}</p>
                </div>
            </div>
            <div className='py-5 bg-gray-50 p-5 m-5 rounded'>
                <h2 className='text-xl uppercase font-semibold'>Restock the Item</h2>
                {/* <form className='flex items-center justify-around gap-2 mx-auto w-80' onSubmit={handleSubmit(onSubmit)}> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 w-full sm:w-96 mx-auto'>
                        {/* Quantity */}
                        <div className='text-center my-3'>
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
                                        value: /^[1-9]*$/,
                                        message: 'Quantity is invalid'
                                    }
                                })}
                            />
                            <p className='text-red-400'>{errors?.quantity?.message}</p>
                        </div>

                        {/* Restock Item */}
                        <div className='text-white cursor-pointer'>
                            <input
                                className='my-3 bg-blue-700 hover:bg-blue-600 px-5 py-2 rounded'
                                type="submit"
                                value="Restock Item"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ItemDetail;