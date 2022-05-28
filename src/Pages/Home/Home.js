import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import Instruments from './Instruments';
import BusinessSummery from './BusinessSummery';
import Testimonials from './Testimonials';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Instruments></Instruments>
            <BusinessSummery></BusinessSummery>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;