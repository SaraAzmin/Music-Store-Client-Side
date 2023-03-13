import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CancelModal from './CancelModal';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const [cancelOrder, setCancelOrder] = useState(null);

    useEffect(() => {
        fetch(`https://music-store-server-side.vercel.app/order?customerEmail=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    //signOut(auth);
                    //localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => setOrders(data))

    }, [orders]);

    return (
        <div>
            <h2 className='text-xl font-semibold text-center py-5 uppercase border-b-2 border-red-100'>My Orders</h2>
            <div className="overflow-x-auto p-10">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='text-center'>
                            <th>SL. No</th>
                            <th>Instrument Name</th>
                            <th>Price</th>
                            <th>Order Quantity</th>
                            <th>Payment</th>
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
                                <td>{
                                    !order.paid ? <Link to={`/dashboard/myOrders/payment/${order._id}`}><button className='btn btn-xs bg-black'>Pay Now</button></Link> :
                                        <div className='flex flex-col'>
                                            <span className='font-bold'>Paid</span>
                                            <span>Trans id: <span className='text-green-500'>{order.transactionId}</span></span>
                                        </div>
                                }</td>
                                <td>
                                    {
                                        !order.paid && <label htmlFor="cancel-confirm-modal" onClick={() => setCancelOrder(order)} className='btn btn-xs bg-rose-700'>Cancel Order</label>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {cancelOrder && <CancelModal
                cancelOrder={cancelOrder}
                setCancelOrder={setCancelOrder}></CancelModal>}
        </div>
    );
};

export default MyOrders;