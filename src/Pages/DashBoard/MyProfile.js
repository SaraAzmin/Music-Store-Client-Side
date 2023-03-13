import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset, getValues } = useForm();

    const onSubmit = (data) => {

        const user = {
            name: getValues('name'),
            email: getValues('email'),
            image: getValues('img'),
            address: getValues('address'),
            phone: getValues('phone')
        }
        //console.log(user)

        fetch(`https://music-store-server-side.vercel.app//update/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                toast("Your profile is updated")
            })
        Navigate('/dashboard');

    }

    return (
        <div>
            <h2 className='text-xl font-semibold text-center py-5 uppercase border-b-2 border-red-100'>My Profile</h2>
            <div className='block mx-auto p-6 mt-10 rounded-lg shadow-lg bg-white max-w-md items-center justify-center'>
                <div className='flex flex-col justify-center items-center mb-5'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex justify-center mb-5">
                            <h5 className='text-gray-900 text-lg font-medium pr-3'>Name: </h5>
                            <input
                                type="text"
                                className="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                placeholder="product name" {...register("name", { required: true })} value={user.displayName} disabled />
                        </div>
                        <div className="flex justify-center mb-5">
                            <h5 className='text-gray-900 text-lg font-medium pr-3'>Email: </h5>
                            <input
                                type="email"
                                className="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                {...register("email", { required: true })} value={user.email} disabled />
                        </div>
                        <div className="flex justify-center  mb-5">
                            <h5 className='text-gray-900 text-lg font-medium pr-3'>Profile Photo: </h5>
                            <input
                                type="text"
                                className="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="image url" {...register("img")} />
                        </div>
                        <div className="flex justify-center  mb-5">
                            <h5 className='text-gray-900 text-lg font-medium pr-3'>address: </h5>
                            <textarea
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Your address" {...register("address")}
                            ></textarea>
                        </div>
                        <div className="flex justify-center  mb-5">
                            <h5 className='text-gray-900 text-lg font-medium pr-3'>Phone: </h5>
                            <input
                                type="text"
                                className="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Your contact" {...register("phone", {
                                    minLength: {
                                        value: 11,
                                        message: 'Phone must be 11 digits'
                                    }

                                })} />
                        </div>
                        <div className='flex justify-center'>
                            <input type="submit" className="btn max-w-xs text-white bg-rose-700 px-10" value="Update Profile"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;