import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {

    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const url = "https://shielded-dusk-24509.herokuapp.com/instruments";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast("New Product added!")
                reset();
            })


    }

    return (
        <div>
            <h2 className='text-xl font-semibold text-center py-5 uppercase border-b-2 border-red-100'>Add Product</h2>
            <div className='block mx-auto p-6 mt-10 rounded-lg shadow-lg bg-white max-w-md items-center justify-center'>
                <div className='flex flex-col justify-center items-center mb-5'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex justify-center mb-5">
                            <h5 className='text-gray-900 text-lg font-medium pr-3'>Name: </h5>
                            <input
                                type="text"
                                className="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                placeholder="product name" {...register("name", { required: true })} />
                        </div>
                        <div className="flex justify-center  mb-5">
                            <h5 className='text-gray-900 text-lg font-medium pr-3'>Image: </h5>
                            <input
                                type="text"
                                className="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="image url" {...register("img", { required: true })} />
                        </div>
                        <div className="flex justify-center  mb-5">
                            <h5 className='text-gray-900 text-lg font-medium pr-3'>Description: </h5>
                            <textarea
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="product description" {...register("description")}
                            ></textarea>
                        </div>
                        <div className="flex justify-center  mb-5">
                            <h5 className='text-gray-900 text-lg font-medium pr-3'>Price: </h5>
                            <input
                                type="number"
                                className="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="product price" {...register("price", { required: true })} />
                        </div>
                        <div className="flex justify-center  mb-5">
                            <h5 className='text-gray-900 text-lg font-medium pr-3'>Available Quantity: </h5>
                            <input
                                type="number"
                                className="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="available quantity" {...register("availableQuantity", { required: true })} />
                        </div>
                        <div className="flex justify-center  mb-5">
                            <h5 className='text-gray-900 text-lg font-medium pr-3'>Minimum Order: </h5>
                            <input
                                type="number"
                                className="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="product quantity" {...register("minQuantity", { required: true })} />
                        </div>
                        <div className='flex justify-center'>
                            <input type="submit" className="btn max-w-xs text-white bg-rose-700 px-10" value="Add Product"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;