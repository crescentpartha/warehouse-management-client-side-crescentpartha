import React from 'react';
import useBooks from '../../../../../hooks/useBooks';
import Item from '../Item/Item';

const Items = () => {
    const [books] = useBooks([]);
    // console.log(books);

    let rest = [];
    const handleBooks = () => {
        books.forEach(element => {
            if (rest.length < 8) {
                rest.push(element);
            }
        });
    }
    handleBooks();
    // console.log(rest);

    return (
        <div className='py-5 my-5'>
            <h2 className='text-4xl sm:text-5xl text-start m-5 px-4 pb-4 font-semibold uppercase'>Best Sellers</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-8 py-5'>
                {
                    rest.map(book => <Item
                        key={book._id}
                        book={book}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;