import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemDetailId } = useParams();
    return (
        <div>
            <h2>Item Detail Id {itemDetailId}</h2>
        </div>
    );
};

export default ItemDetail;