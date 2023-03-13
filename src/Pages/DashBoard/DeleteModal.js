import React from 'react';
import { toast } from 'react-toastify';

const CancelModal = ({ deleteProduct, setDeleteProduct }) => {

    const { _id } = deleteProduct;

    const handleDelete = (id) => {
        fetch(`https://music-store-server-side.vercel.app/instruments/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success('Product Deleted!')
                    setDeleteProduct(null);
                }
            })

    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-semibold text-xl text-rose-700">Are you sure you want to delete {deleteProduct.name}?</h3>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(deleteProduct._id)} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelModal;