import { useEffect, useState } from "react"

const useLoadSingleBookItem = (id) => {
    const [book, setBook] = useState({});

    useEffect(() => {
        const url = `https://books-warehouse-management-server-side-crescentpartha.vercel.app/book/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data));
    }, [id, book]);

    return [book, setBook];
}

export default useLoadSingleBookItem;