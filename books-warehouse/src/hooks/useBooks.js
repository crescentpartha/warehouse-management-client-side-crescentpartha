import { useEffect, useState } from "react";

const useBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://books-warehouse-management-server-side-crescentpartha.vercel.app/book')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [books]);

    return [books, setBooks];
}

export default useBooks;