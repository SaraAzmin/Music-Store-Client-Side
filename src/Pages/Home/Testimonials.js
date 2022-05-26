import React, { useEffect, useState } from 'react';
import bg from '../../Assets/Images/bg.jpg'
import Testimonial from './Testimonial';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);


    return (
        <div className='px-10 lg:px-20 py-8 lg:py-16 bg-gray-200' style={{ background: `url(${bg})` }}>
            <h3 className='text-2xl lg:text-4xl pb-5 lg:pb-10 text-center font-semibold text-rose-700 uppercase'>What our precious customers say?</h3>
            <section className=" text-gray-700">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    {
                        reviews.map(review => <Testimonial key={review._id} review={review}></Testimonial>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Testimonials;