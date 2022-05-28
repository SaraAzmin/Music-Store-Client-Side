import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {

    //const [review, setReview] = useState({});
    const [user] = useAuthState(auth);

    const handleAddingReview = (event) => {
        event.preventDefault();

        const reviewInput = event.target.inputReview.value;
        console.log(reviewInput);

        const review = {
            name: user.displayName,
            img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp',
            description: reviewInput
        }

        fetch('https://shielded-dusk-24509.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(result => {
                toast("Thank you for your time and feedback!")
            })

    }

    return (
        <div>
            <h2 className='text-xl font-semibold text-center py-5 uppercase border-b-2 border-red-100'>Add a Review</h2>
            <form onSubmit={handleAddingReview}>
                <div className='flex items-center justify-center p-10'>
                    <label class="form-label inline-block pr-5 text-rose-700 font-semibold text-xl"
                    >Review:</label>
                    <textarea name='inputReview' class="textarea textarea-bordered p-5 w-1/2" placeholder="Please let us know your feedback"></textarea>
                </div>
                <div className='flex items-center justify-center'>
                    <input className='btn max-w-xs text-white px-10 bg-rose-700' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default AddReview;