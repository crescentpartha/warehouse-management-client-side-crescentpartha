import React from 'react';
import useServices from '../../../../hooks/useServices';
import Service from './Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div className='py-20 my-5 bg-gray-50'>
            <h2 className='text-4xl sm:text-5xl text-start m-5 px-4 pb-4 font-semibold uppercase'>Our Services</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-5'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;