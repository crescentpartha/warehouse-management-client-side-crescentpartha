import { useEffect, useState } from "react"

const useLoadEmailOrderedBooks = (email) => {
    const [emailOrders, setEmailOrders] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/order/email/${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setEmailOrders(data));
    }, [email, emailOrders]);

    return [emailOrders, setEmailOrders];
}

export default useLoadEmailOrderedBooks;