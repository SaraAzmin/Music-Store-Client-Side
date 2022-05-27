import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/order?customerEmail=${user.email}`, {
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
            <h2 className='text-2xl font-semibold  text-center pt-5 uppercase'>Hello <span className='text-rose-700'>{user.displayName}</span></h2>
            <h2 className='text-xl font-semibold text-center pt-2 pb-5 uppercase border-b-2 border-red-100'>Welcome to your Dashboard</h2>
            <div className="overflow-x-auto p-10">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='text-center'>
                            <th>SL. No</th>
                            <th>Instrument Name</th>
                            <th>Price</th>
                            <th>Order Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.productName}</td>
                                <td>$ {order.orderPrice}</td>
                                <td>{order.orderQuantity}</td>
                                <td>
                                    <Link to='/'><button className='btn btn-xs bg-rose-700'>Cancel Order</button></Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div >
        </div>
    );
};

export default MyOrders;