import React from 'react';
import { ExternalLink } from 'react-external-link';

const MyPortfolio = () => {
    return (
        <div className='flex flex-col justify-center items-center my-10'>
            <div className="flex mb-5">
                <h5 className='text-black text-lg font-medium pr-3'>Name: </h5>
                <h5 className='text-gray-900 text-lg font-normal'>SARA AZMIN</h5>
            </div>
            <div className="flex mb-5">
                <h5 className='text-gray-900 text-lg font-medium pr-3'>Email: </h5>
                <h5 className='text-gray-900 text-lg font-normal'>sarazmin28@gmail.com</h5>
            </div>
            <div className="flex mb-5">
                <h5 className='text-gray-900 text-lg font-medium pr-3'>Education: </h5>
                <h5 className='text-gray-900 text-lg font-normal'>MSc in Digital Transformation, FH Dortmund, Germany</h5>
            </div>
            <div className="flex mb-5">
                <h5 className='text-gray-900 text-lg font-medium pr-5'>Frontend skills: </h5>
                <h5 className='text-gray-900 text-lg font-normal'>HTML5, CSS (Vanilla, Bootstrap, Tailwind), Reactjs, UI prototyping</h5>
            </div>
            <div className="flex mb-5">
                <h5 className='text-gray-900 text-lg font-medium pr-5'>Beckend skills: </h5>
                <h5 className='text-gray-900 text-lg font-normal'>ASP.NET (MVC), Nodejs, Expressjs</h5>
            </div>
            <div className="flex mb-5">
                <h5 className='text-gray-900 text-lg font-medium pr-5'>Projects: </h5>
                <ul className='list-disc pl-5'>
                    <li><ExternalLink className="text-rose-700 font-semibold" href="https://music-store-3bd02.web.app/" target="_blank" >Music Store</ExternalLink></li>
                    <li><ExternalLink className="text-rose-700 font-semibold" href="https://grocery-inventory-client-side.web.app/" target="_blank" >Go Green Groceries</ExternalLink></li>
                    <li><ExternalLink className="text-rose-700 font-semibold" href="https://purpose-coach-website.web.app/" target="_blank" >Purpose Coach</ExternalLink></li>
                </ul>
            </div>
        </div>
    );
};

export default MyPortfolio;