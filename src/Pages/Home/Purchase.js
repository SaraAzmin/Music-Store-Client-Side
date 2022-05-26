import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = () => {

    const { id } = useParams();
    const [instrument, setInstrument] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/instruments/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInstrument(data))
    }, []);

    return (
        <div className='px-10 lg:px-20 py-8 lg:py-14 flex flex-col bg-gray-100'>
            <h3 className='text-2xl lg:text-3xl pb-5 lg:pb-10 text-center font-semibold text-rose-700 uppercase'>Purchase Instrument</h3>
            <div className='md:flex justify-center items-center mb-5 border-2 lg:w-2/3 mx-auto p-10 rounded-md border-rose-700 bg-white'>
                <div className='md:mr-5 lg:w-2/5 mb-5 md:mb-0'>
                    <img className='h-[12rem] mx-auto' src={instrument.img} alt="" />
                </div>
                <div className='lg:w-3/5 justify-start items-start'>
                    <div className="flex mb-5">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Instrument Name: </h5>
                        <h5 className='text-gray-900 text-lg font-normal'>{instrument.name}</h5>
                    </div>
                    <div className="flex mb-5">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Price: </h5>
                        <h5 className='text-gray-900 text-lg font-normal'>${instrument.price}</h5>
                    </div>
                    <div className="flex mb-5">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Available Quantity: </h5>
                        <h5 className='text-gray-900 text-lg font-normal' name='quantity'>{instrument.availableQuantity}</h5>
                    </div>
                    <div className="md:flex items-center mb-5">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Order Quantity: </h5>
                        <input
                            type="number"
                            className="input input-bordered w-full max-w-xs" name='orderInput' value={instrument.minQuantity} />
                    </div>
                    <div className="flex mb-5 items-center">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Customer Name: </h5>
                        <input type="text" name="userName" disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="flex mb-5 items-center">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Customer Email: </h5>
                        <input type="text" name="userEmail" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="flex mb-5 items-center">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Customer Address: </h5>
                        <input type="text" name="userAddress" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="flex mb-5 items-center">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Customer Phone: </h5>
                        <input type="text" name="userPhone" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="flex mb-5 items-center">
                        <Link to="/" type="button" className="mx-auto px-6 py-4 mt-7 bg-rose-700 text-white font-semibold text-lg rounded shadow-md">BUY NOW</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Purchase;