import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {

    const { id } = useParams();

    return (
        <div className='px-10 lg:px-20 py-8 lg:py-14 flex flex-col bg-gray-100'>
            <h3 className='text-2xl lg:text-3xl pb-5 lg:pb-10 text-center font-semibold text-rose-700 uppercase'>Purchase Instrument</h3>
            <div className='md:flex justify-center items-center mb-5 border-2 lg:w-1/2 mx-auto p-5 rounded-md border-green-500'>
                <div className='md:mr-5 lg:w-2/5 mb-5 md:mb-0'>
                    <img className='h-[12rem] mx-auto' alt="" />
                </div>
                <div className='lg:w-3/5 justify-start items-start'>
                    <div className="flex mb-5">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Name: </h5>
                        <h5 className='text-gray-900 text-lg font-normal'></h5>
                    </div>
                    <div className="flex  mb-5">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Supplier: </h5>
                        <h5 className='text-gray-900 text-lg font-normal'></h5>
                    </div>
                    <div className="flex mb-5">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Price: </h5>
                        <h5 className='text-gray-900 text-lg font-normal'>$</h5>
                    </div>
                    <div className="flex mb-5">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Quantity: </h5>
                        <h5 className='text-gray-900 text-lg font-normal' name='quantity'></h5>
                        <button type="button" className="inline-block px-5 py-2 bg-green-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg ml-3">Deliver</button>
                    </div>
                    <div className="md:flex mb-5">
                        <div>
                            <h5 className='text-gray-900 text-lg font-medium pr-3'>Add Stock: </h5>
                            <input
                                type="number"
                                className="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="stock input" name='valueAdd' />
                        </div>
                        <button type="button" className=" inline-block px-5 mt-3 md:mt-0 py-2 bg-green-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg ml-3">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;