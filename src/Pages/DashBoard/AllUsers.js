import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";
import UsersRow from "./UsersRow";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://music-store-server-side.vercel.app/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-center py-5 uppercase border-b-2 border-red-100">
        All Users
      </h2>
      <div className="overflow-x-auto p-10">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center">
              <th>SL. No</th>
              <th>Name</th>
              <th>User Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map((user, index) => (
              <UsersRow
                key={user._id}
                user={user}
                refetch={refetch}
                index={index}
              ></UsersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
