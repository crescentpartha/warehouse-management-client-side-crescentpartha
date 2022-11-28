import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddItemsHome = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // console.log(data);

        // POST a book data from client-side to server-side
        const url = `http://localhost:5000/book`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        });
        navigate('/manage');
    }

    return (
        <div className='p-5'>
            <h2 className='text-4xl sm:text-5xl font-normal uppercase pb-10 pt-5'>Add Item</h2>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 w-11/12 sm:w-4/5 md:w-3/5 max-w-5xl mx-auto p-5 sm:p-10 bg-gray-50 rounded shadow-md'>

                    {/* Name */}
                    <div className='text-start'>
                        <label className='font-semibold pb-2' htmlFor="">Name</label> <br />
                        <input
                            style={{ border: '1px solid #d6d6d6' }}
                            className='d-block w-full px-2 py-1 rounded'
                            placeholder='Name'
                            type="text"
                            {...register("name", {
                                required: "Name is required",
                                maxLength: 30,
                                pattern: {
                                    value: /^[A-Za-z]+$/i,
                                    message: 'Name is invalid'
                                }
                            })}
                        />
                        <p className='text-red-400'>{errors?.name?.message}</p>
                    </div>

                    {/* Author */}
                    <div className='text-start'>
                        <label className='font-semibold pb-2' htmlFor="">Author</label> <br />
                        <input
                            style={{ border: '1px solid #d6d6d6' }}
                            className='d-block w-full px-2 py-1 rounded'
                            placeholder='Author'
                            type="text"
                            {...register("author", {
                                required: "Author is required",
                                maxLength: 30,
                                pattern: {
                                    value: /^[A-Za-z]+$/i,
                                    message: 'Author is invalid'
                                }
                            })}
                        />
                        <p className='text-red-400'>{errors?.author?.message}</p>
                    </div>

                    {/* Supplier Name */}
                    <div className='text-start'>
                        <label className='font-semibold pb-2' htmlFor="">Supplier Name</label> <br />
                        <input
                            style={{ border: '1px solid #d6d6d6' }}
                            className='d-block w-full px-2 py-1 rounded'
                            placeholder='Supplier Name'
                            type="text"
                            {...register("supplier_name", {
                                required: "Supplier Name is required",
                                maxLength: 40,
                                pattern: {
                                    value: /^[A-Za-z]+$/i,
                                    message: 'Supplier Name is invalid'
                                }
                            })}
                        />
                        <p className='text-red-400'>{errors?.supplier_name?.message}</p>
                    </div>

                    {/* Image URL */}
                    <div className='text-start'>
                        <label className='font-semibold pb-2' htmlFor="">Image URL</label> <br />
                        <input
                            style={{ border: '1px solid #d6d6d6' }}
                            className='d-block w-full px-2 py-1 rounded'
                            placeholder='Image URL'
                            type="text"
                            {...register("img", {
                                required: "Image URL is required",
                                maxLength: 60,
                                pattern: {
                                    value: /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi,
                                    message: 'Image URL is invalid'
                                }
                            })}
                        />
                        <p className='text-red-400'>{errors?.img?.message}</p>
                    </div>

                    {/* Price */}
                    <div className='text-start'>
                        <label className='font-semibold pb-2' htmlFor="">Price</label> <br />
                        <input
                            style={{ border: '1px solid #d6d6d6' }}
                            className='d-block w-full px-2 py-1 rounded'
                            placeholder='Price'
                            type="number"
                            {...register("price", {
                                required: "Price is required",
                                maxLength: 8,
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: 'Price is invalid'
                                }
                            })}
                        />
                        <p className='text-red-400'>{errors?.price?.message}</p>
                    </div>

                    {/* Quantity */}
                    <div className='text-start'>
                        <label className='font-semibold pb-2' htmlFor="">Quantity</label> <br />
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

                    {/* Ratings */}
                    <div className='text-start'>
                        <label className='font-semibold pb-2' htmlFor="">Ratings</label> <br />
                        <input
                            style={{ border: '1px solid #d6d6d6' }}
                            className='d-block w-full px-2 py-1 rounded'
                            placeholder='Ratings'
                            type="number"
                            {...register("ratings", {
                                required: "Ratings is required",
                                maxLength: 8,
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: 'Ratings is invalid'
                                }
                            })}
                        />
                        <p className='text-red-400'>{errors?.ratings?.message}</p>
                    </div>

                    {/* Description */}
                    <div className='text-start'>
                        <label className='fw-semibold pb-2' htmlFor="">Description</label> <br />
                        <textarea
                            style={{ border: '1px solid #d6d6d6' }}
                            className='d-block w-full px-2 py-1 rounded'
                            placeholder='Description'
                            type="textarea"
                            rows="3"
                            {...register("description", {
                                required: "Description is required",
                                maxLength: 1000,
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])/,
                                    message: "At least one [a-z][A-Z] from each categories"
                                }
                            })}
                        />
                        <p className='text-red-400'>{errors?.description?.message}</p>
                    </div>
                </div>

                {/* Add Item */}
                <div className='bg-blue-700 hover:bg-blue-600 px-5 py-2 my-5 rounded inline-block mx-auto text-white'>
                    <input
                        className='d-block btn btn-primary'
                        type="submit"
                        value="Add Item"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddItemsHome;