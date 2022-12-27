import { useEffect, useState } from "react";

const useOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://books-warehouse-management-server-side-crescentpartha.vercel.app/order')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders]);

    return [orders, setOrders];
}

export default useOrders;