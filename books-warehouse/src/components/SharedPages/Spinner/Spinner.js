import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Spinner = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="animate-spin text-xl my-1" role="status">
                <span className="visually-hidden"><FaSpinner></FaSpinner></span>
            </div>
        </div>
    );
};

export default Spinner;