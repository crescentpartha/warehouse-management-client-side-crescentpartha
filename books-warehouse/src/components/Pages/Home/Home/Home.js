import React from 'react';
import Banner from '../Banner/Banner';
import CoreValues from '../CoreValues/CoreValues';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <CoreValues></CoreValues>
        </div>
    );
};

export default Home;