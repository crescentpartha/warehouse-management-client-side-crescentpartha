import { useEffect, useState } from "react"

const useLoadSingleOrderedBookItems = (id) => {
    const [order, setOrder] = useState({});

    useEffect( () => {
        const url = `https://books-warehouse-management-server-side-crescentpartha.vercel.app/order/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOrder(data));
    }, [id, order]);

    return [order, setOrder];
}

export default useLoadSingleOrderedBookItems;