import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/order', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => setOrders(data))

    }, []);

    return (
        <div>
            <h2 className='text-xl font-semibold text-center py-5 uppercase border-b-2 border-red-100'>Manage All Orders</h2>
            <div className="overflow-x-auto p-10">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='text-center'>
                            <th>SL. No</th>
                            <th>Customer Email</th>
                            <th>Instrument Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.customerEmail}</td>
                                <td>{order.productName}</td>
                                <td>$ {order.orderPrice}</td>
                                <td>{
                                    !order.paid ? <span className='font-bold'>Not Paid</span> :
                                        <span className='font-bold'>Paid</span>
                                }</td>
                                <td>Pending</td>
                                <td>
                                    {order.paid &&
                                        <label htmlFor="cancel-confirm-modal" className='btn btn-xs bg-rose-700'>Ship Now</label>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;