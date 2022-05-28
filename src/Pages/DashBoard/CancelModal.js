import React from 'react';
import { toast } from 'react-toastify';

const CancelModal = ({ cancelOrder, setCancelOrder }) => {

    const { customerEmail } = cancelOrder;

    const handleDelete = () => {
        fetch(`https://shielded-dusk-24509.herokuapp.com/order/${customerEmail}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success('Order Cancelled!')
                    setCancelOrder(null);
                }
            })

    }

    return (
        <div>
            <input type="checkbox" id="cancel-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-semibold text-xl text-rose-700">Are you sure you want to delete this order?</h3>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="cancel-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelModal;