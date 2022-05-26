import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuitems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/myPortfolio'>My Portfolio</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </>

    return (
        <div>
            <div className="navbar bg-zinc-700 text-stone-100">
                <div className="navbar">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-stone-300-100 text-black rounded-box w-52">
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
            </div>
        </div>
    );
};

export default Navbar;