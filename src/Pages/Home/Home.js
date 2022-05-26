import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import Instruments from './Instruments';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Instruments></Instruments>
            <Footer></Footer>
        </div>
    );
};

export default Home;