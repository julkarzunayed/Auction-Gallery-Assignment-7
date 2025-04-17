import React from 'react';
import { CiBellOn } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className='bg-white'>
            <div className="container mx-auto navbar bg-white text-black shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Auctions</a></li>
                            <li><a>Categories</a></li>
                            <li><a>How to works</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <span
                            className='font-sora font-medium text-3xl text-[#003EA4]'>Auction
                        </span>
                        <span
                            className='font-poppins font-bold text-3xl text-[#FFD337]'>Gallery
                        </span>
                    </a>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu text-xl bg-white menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Auctions</a></li>
                        <li><a>Categories</a></li>
                        <li><a>How to works</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-3">
                    <button className='bg-[#EBF0F5] rounded-full p-2'><CiBellOn size={24} /></button>
                    <div className="avatar">
                        <div className="w-9 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;