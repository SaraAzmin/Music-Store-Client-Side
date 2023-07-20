import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const UsersRow = ({ user, refetch, index }) => {
  const { email, userType } = user;

  const makeAdmin = () => {
    fetch(
      `https://music-store-server-side.vercel.app/user/admin/${user.email}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403) {
          toast.error("You cannot make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Admin added successfully");
        }
      });
  };

  const removeUser = () => {
    toast("Not implemented yet!");
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user.email}</td>
      <td>
        {userType == "admin" ? (
          <span className="font-bold">ADMIN</span>
        ) : (
          <button className="btn btn-xs bg-black" onClick={makeAdmin}>
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button onClick={removeUser} className="btn btn-xs bg-rose-700">
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default UsersRow;
