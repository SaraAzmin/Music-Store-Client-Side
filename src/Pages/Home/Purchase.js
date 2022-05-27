import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Purchase = () => {

    const { id } = useParams();
    const [instrument, setInstrument] = useState({});
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, onChange, handleSubmit, getValues } = useForm();
    const navigate = useNavigate();

    let minValue = instrument.minQuantity;
    let maxValue = instrument.availableQuantity;

    useEffect(() => {
        const url = `http://localhost:5000/instruments/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInstrument(data))
    }, []);

    const onSubmit = (data, e) => {

        let orderValue = getValues('quantity');
        const totalPrice = instrument.price * orderValue;

        const order = {
            customerName: user.displayName,
            customerEmail: user.email,
            customerAddress: e.target.userAddress.value,
            customerPhone: e.target.userPhone.value,
            productName: instrument.name,
            orderPrice: totalPrice,
            orderQuantity: orderValue
        }
        //console.log(data, e);
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                toast("New order added. Please complete payment!")
            })
        navigate('/dashboard');

    }


    return (
        <div className='px-10 lg:px-20 py-8 lg:py-14 flex flex-col bg-gray-100'>
            <h3 className='text-2xl lg:text-3xl pb-5 lg:pb-10 text-center font-semibold text-rose-700 uppercase'>Purchase Instrument</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                            <h5 className='text-gray-900 text-lg font-medium pr-5'>Order Quantity: </h5>
                            <div>
                                <input
                                    type="number"
                                    className="input input-bordered w-full max-w-xs" name='orderInput' onChange={onChange} placeholder={`must be atleast ${instrument.minQuantity}`} {...register('quantity', {
                                        max: {
                                            value: maxValue,
                                            message: 'Cannot be more than available'
                                        },
                                        min: {
                                            value: minValue,
                                            message: 'cannot be less than minimum order'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                </label>
                            </div>
                        </div>
                        <div className="flex mb-5 items-center">
                            <h5 className='text-gray-900 text-lg font-medium pr-5'>Customer Name: </h5>
                            <input type="text" name="userName" disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="flex mb-5 items-center">
                            <h5 className='text-gray-900 text-lg font-medium pr-5'>Customer Email: </h5>
                            <input type="text" name="userEmail" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="flex mb-5 items-center">
                            <h5 className='text-gray-900 text-lg font-medium mr-1'>Customer Address: </h5>
                            <input type="text" name="userAddress" placeholder='your address' className="input input-bordered w-full max-w-xs"  {...register("userAddress", { required: true })} />
                        </div>
                        <div className="flex mb-5 items-center">
                            <h5 className='text-gray-900 text-lg font-medium pr-5'>Customer Phone: </h5>
                            <div>
                                <input type="text" name="userPhone" placeholder='enter 11 digit number' className="input input-bordered w-full max-w-xs" {...register("userPhone", {
                                    minLength: {
                                        value: 11,
                                        message: 'Phone must be 11 digits'
                                    },
                                    required: {
                                        value: true,
                                        message: 'Phone is Required'
                                    }
                                })} />
                                <label className="label">
                                    {errors.userPhone?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.userPhone.message}</span>}
                                    {errors.userPhone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.userPhone.message}</span>}
                                </label>
                            </div>
                        </div>
                        <div className="flex mb-5 items-center justify-center">
                            <input disabled={errors.quantity?.type === 'min' || errors.quantity?.type === 'max'} className='btn max-w-xs text-white bg-rose-700 px-10' type="submit" value="Order Now" />
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default Purchase;