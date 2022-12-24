import React from 'react';
import PageTitle from '../../../SharedPages/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import CoreValues from '../CoreValues/CoreValues';
import Items from '../InventoryItems/Items/Items';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Items></Items>
            <Services></Services>
            <CoreValues></CoreValues>
        </div>
    );
};

export default Home;