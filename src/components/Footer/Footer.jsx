import React from 'react';

const Footer = () => {
    return (
        <div className='py-32 flex flex-col items-center bg-white text-black gap-4'>
            <h3>
                <a
                    onClick={() => {
                        document.getElementById("active-auctions").
                                scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                    className="btn btn-ghost text-xl">
                    <span
                        className='font-sora font-medium text-3xl text-[#003EA4]'>Auction
                    </span>
                    <span
                        className='font-poppins font-bold text-3xl text-[#FFD337]'>Gallery
                    </span>
                </a>
            </h3>
            <p>Bid.  Win.  Own.</p>
            <ul className='flex gap-9'>
                <li><a>Home</a></li>
                <li><a>Auctions</a></li>
                <li><a>Categories</a></li>
                <li><a>How to works</a></li>
            </ul>
            <p> © 2025 AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Footer;