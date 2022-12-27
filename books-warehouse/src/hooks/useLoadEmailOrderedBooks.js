import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useLoadEmailOrderedBooks = (email) => {
    const [emailOrders, setEmailOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Handle 401, 403 to log out user and interceptors
        const getOrders = async () => {
            const url = `https://books-warehouse-management-server-side-crescentpartha.vercel.app/order/email/${email}`;
            // fetch(url, { // Send jwt token in the server, to verify and decode jwt token;
            //     headers: {
            //         authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            //         email: email
            //     }
            // })
            //     .then(res => res.json())
            //     .then(data => setEmailOrders(data));

            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                        email: email
                    }
                })
                setEmailOrders(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getOrders();
    }, [email, emailOrders, navigate]);

    return [emailOrders, setEmailOrders];
}

export default useLoadEmailOrderedBooks;