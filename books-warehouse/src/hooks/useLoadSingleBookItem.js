import { useEffect, useState } from "react"

const useLoadSingleBookItem = (id) => {
    const [book, setBook] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/book/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data));
    }, [id]);

    return [book, setBook];
}

export default useLoadSingleBookItem;