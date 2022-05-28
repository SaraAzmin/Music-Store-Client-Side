import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3Q5MChR64wzhkKSbLssex9K6cpixSCzi3xlduqQpyWAYPDHOQoYCm0xjIHnnv5oqlRF7BqPAUCLQ3ls4M2iZzJ00scpTTpVz');

const Payment = () => {

    const { id } = useParams();

    const url = `http://localhost:5000/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className='text-xl font-semibold text-center py-5 uppercase border-b-2 border-red-100'>Complete your payment</h2>
            <div className='flex flex-col justify-center items-center'>
                <div className="card w-50 max-w-md bg-gray-100 shadow-xl my-5 p-5">
                    <div className="card-body">
                        <p className='font-bold text-lg'> Dear Customer,</p>
                        <h2 className="text-lg font-medium">You ordered <span className='text-rose-700'>{order.orderQuantity}</span> pieces of <span className='text-rose-700'>{order.productName}</span></h2>
                        <p>Please pay: <span className='font-bold'>${order.orderPrice}</span></p>
                    </div>
                </div>
                <div className="card shadow-2xl w-full max-w-md border-2 border-red-700">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;