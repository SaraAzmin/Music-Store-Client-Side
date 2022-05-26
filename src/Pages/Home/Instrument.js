import React from 'react';

const Instrument = ({ instrument }) => {

    const { _id, name, img, description, price, minQuantity, availableQuantity } = instrument;

    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Musical Instruments" className="rounded-xl h-[12rem]" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-justify py-3'>{description}</p>
                    <div className="flex justify-between mb-3 py-1 border-y-2">
                        <h5 className='text-gray-900 text-lg font-medium'>Available: <span className=' text-rose-700'> {availableQuantity}</span></h5>
                        <h5 className='text-gray-900 text-lg font-medium'>Minimum Order: <span className=' text-rose-700'>{minQuantity}</span></h5>
                    </div>
                    <div className="flex justify-between items-center py-1">
                        <h5 className='text-gray-900 text-lg font-medium'>Price: <span className=' text-rose-700'>${price}</span></h5>
                        <button className="btn bg-rose-700 hover:scale-110 transition duration-300 ease-in-out uppercase">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instrument;