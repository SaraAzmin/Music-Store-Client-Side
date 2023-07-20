import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-gray-100 px-10">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 text-black font-medium">
          {/* <!-- Sidebar content here --> */}
          {!admin && (
            <>
              <li className="border-b-2">
                <Link to="/dashboard/myOrders">My Orders</Link>
              </li>
              <li className="border-b-2">
                <Link to="/dashboard/addReview">Add a Review</Link>
              </li>
            </>
          )}
          <li className="border-b-2">
            <Link to="/dashboard/myProfile">My Profile</Link>
          </li>
          {admin && (
            <>
              <li className="border-b-2">
                <Link to="/dashboard/makeAdmin">Make Admin</Link>
              </li>
              <li className="border-b-2">
                <Link to="/dashboard/addProduct">Add Product</Link>
              </li>
              <li className="border-b-2">
                <Link to="/dashboard/manageOrders">Manage All Orders</Link>
              </li>
              <li className="border-b-2">
                <Link to="/dashboard/manageProduct">Manage Products</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
