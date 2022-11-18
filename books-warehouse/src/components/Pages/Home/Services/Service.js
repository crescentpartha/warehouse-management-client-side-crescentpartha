import React, { useState } from 'react';
import { FaDropbox, FaCarSide, FaGlobeAsia, FaHome, FaRoad } from 'react-icons/fa';
import { HiArchive } from 'react-icons/hi';

const Service = ({ service }) => {
    const [hoverEffect, setHoverEffect] = useState(false);
    const { name, description, iconName } = service;
    // console.log(hoverEffect);

    return (
        <div className='flex items-center justify-between gap-4 border rounded-sm m-4 p-6 border-b-4 hover:border-b-blue-400'
            onMouseEnter={() => setHoverEffect(true)}
            onMouseLeave={() => setHoverEffect(false)}
        >
            <div className='text-start'>
                <h2 className='text-md font-bold uppercase pb-1'>{name}</h2>
                <p className='text-sm text-gray-500'>{description}</p>
            </div>
            <div>
                {
                    iconName === 'FaDropbox' && <FaDropbox className={`${hoverEffect ? "text-blue-400" : "text-gray-400"} text-5xl`} />
                }
                {
                    iconName === 'FaCarSide' && <FaCarSide className={`${hoverEffect ? "text-blue-400" : "text-gray-400"} text-5xl`} />
                }
                {
                    iconName === 'FaGlobeAsia' && <FaGlobeAsia className={`${hoverEffect ? "text-blue-400" : "text-gray-400"} text-5xl`} />
                }
                {
                    iconName === 'FaHome' && <FaHome className={`${hoverEffect ? "text-blue-400" : "text-gray-400"} text-5xl`} />
                }
                {
                    iconName === 'FaRoad' && <FaRoad className={`${hoverEffect ? "text-blue-400" : "text-gray-400"} text-5xl`} />
                }
                {
                    iconName === 'HiArchive' && <HiArchive className={`${hoverEffect ? "text-blue-400" : "text-gray-400"} text-5xl`} />
                }
            </div>
        </div>
    );
};

export default Service;