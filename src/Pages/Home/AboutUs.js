import React from 'react';
import sideImg from '../../Assets/Images/image.jpg'

const AboutUs = () => {
    return (
        <div>
            <div className="hero bg-rose-700 py-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={sideImg} className="max-w-xs px-5 md:px-0 rounded-lg shadow-2xl hover:scale-110 transition duration-400 ease-in-out" />
                    <div className=''>
                        <h1 className="text-2xl md:text-5xl text-white font-bold text-center lg:text-left pt-5 md:pt-0">About Us</h1>
                        <p className="py-6 text-stone-200 px-5 lg:pl-0 lg:pr-20">As Music Store has steadily grown to be one of the largest designers, importers and distributors of stringed and fretted instruments in the world, it’s important to recognize how this remarkable growth was achieved.  For over four decades, Music Store has sought out individual craftsmen as well as established factories to provide the very best handcrafted instruments possible at the best price available on the world market.</p>
                        <button className="btn bg-black border-2 border-white ml-5 lg:ml-0 lg:px-5">Know More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;