import React from 'react';
import { useParams } from 'react-router-dom';
import useLoadSingleBookItem from '../../../../../hooks/useLoadSingleBookItem';

const ItemDetail = () => {
    const { itemDetailId } = useParams();
    const [book] = useLoadSingleBookItem(itemDetailId);
    // console.log(book);
    const { name, author, description, img, price, quantity, ratings, supplier_name } = book;

    return (
        <div>
            <h2>Item Detail Id {itemDetailId}</h2>
        </div>
    );
};

export default ItemDetail;