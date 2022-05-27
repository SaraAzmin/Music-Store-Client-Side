import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.getItem('accessToken');
    };

    const menuitems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/myPortfolio'>My Portfolio</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>{user ? <button className="btn btn-ghost font-bold" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
    </>

    return (
        <div>
            <div className="navbar bg-rose-700 text-stone-100">
                <div className="navbar">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-black lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-stone-100 text-black rounded-box w-52">
                            {menuitems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl pl-20" to='/home'>Music Store</Link>
                </div>
                <div className="navbar-center hidden lg:flex pr-20">
                    <ul className="menu menu-horizontal p-0">
                        {menuitems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>

        </div>
    );
};

export default Navbar;