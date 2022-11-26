import React from 'react';
import Banner from '../Banner/Banner';
import CoreValues from '../CoreValues/CoreValues';
import Items from '../InventoryItems/Items/Items';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Services></Services>
            <CoreValues></CoreValues>
        </div>
    );
};

export default Home;