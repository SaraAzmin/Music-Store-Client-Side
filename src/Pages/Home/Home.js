import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import Instruments from './Instruments';
import BusinessSummery from './BusinessSummery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Instruments></Instruments>
            <BusinessSummery></BusinessSummery>
            <Footer></Footer>
        </div>
    );
};

export default Home;