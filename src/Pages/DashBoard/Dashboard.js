import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {

    const [user] = useAuthState(auth);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-semibold  text-center pt-5 uppercase'>Hello <span className='text-rose-700'>{user.displayName}</span></h2>
                <h2 className='text-xl font-semibold text-center pt-2 pb-5 uppercase border-b-2 border-red-100'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-gray-100 px-10">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 text-black font-medium">
                    {/* <!-- Sidebar content here --> */}
                    <li className='border-b-2'><Link to="/dashboard">My Orders</Link></li>
                    <li className='border-b-2'><Link to="/dashboard/addReview">Add a Review</Link></li>
                    <li className='border-b-2'><Link to="/dashboard/myProfile">My Profile</Link></li>
                    {/* {
                        admin && <><li><Link to="/dashboard/users">All Users</Link></li>
                            <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
                            <li><Link to="/dashboard/manageDoctor">Manage Doctors</Link></li></>
                    } */}
                </ul>

            </div >
        </div >
    );
};

export default Dashboard;