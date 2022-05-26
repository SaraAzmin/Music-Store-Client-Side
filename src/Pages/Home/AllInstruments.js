import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllInstruments = () => {

    const [instruments, setInstruments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instruments')
            .then(res => res.json())
            .then(data => setInstruments(data));
    }, []);

    return (
        <div className='px-10 lg:px-20 py-10'>
            <h3 className='text-2xl lg:text-4xl pb-5 lg:pb-10 text-center font-semibold text-rose-700 uppercase'>Our Instruments</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='text-center'>
                            <th>SL. No</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Minimum Order</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            instruments.map((instrument, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{instrument.name}</td>
                                <td>$ {instrument.price}</td>
                                <td>{instrument.availableQuantity}</td>
                                <td>{instrument.minQuantity}</td>
                                <td>
                                    <Link to={`/instruments/${instrument._id}`}><button className='btn btn-xs bg-rose-700'>PURCHASE</button></Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div >
        </div >
    );
};

export default AllInstruments;