import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import DeleteModal from "./DeleteModal";

const ManageProduct = () => {
  const [instruments, setInstruments] = useState([]);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://music-store-server-side.vercel.app/instruments", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => setInstruments(data));
  }, [instruments]);

  return (
    <div>
      <h2 className="text-xl font-semibold text-center py-5 uppercase border-b-2 border-red-100">
        Manage All Products
      </h2>
      <div className="overflow-x-auto p-10">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center">
              <th>SL. No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Minimum Order</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {instruments.map((instrument, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{instrument.name}</td>
                <td>$ {instrument.price}</td>
                <td>{instrument.availableQuantity}</td>
                <td>{instrument.minQuantity}</td>
                <td>
                  <label
                    htmlFor="delete-confirm-modal"
                    onClick={() => setDeleteProduct(instrument)}
                    className="btn btn-xs bg-rose-700"
                  >
                    Delete Product
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteProduct && (
        <DeleteModal
          deleteProduct={deleteProduct}
          setDeleteProduct={setDeleteProduct}
        ></DeleteModal>
      )}
    </div>
  );
};

export default ManageProduct;
