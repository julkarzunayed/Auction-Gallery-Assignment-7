import './Banner.css'
import React from 'react';

const Banner = () => {

    return (
        <div className=' flex items-center bg-linear-to-b from-[#101010] to-[#101010] h-[730px] banner-container'>
            <div className="font-sora container mx-auto flex items-center">
                <div className="flex flex-col gap-5 max-w-[642px]">
                    <h1 className='font-semibold text-5xl text-white'>
                        Bid on Unique Items from <br /> Around the World
                    </h1>
                    <p className="font-light text-2xl text-white">
                        Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                    </p>
                    <div className="">
                        <button
                            onClick={() => {
                                document.getElementById("active-auctions").
                                scrollIntoView({ behavior: "smooth", block: "start" })}
                            }
                            className='bg-white text-black rounded-full px-8 py-4 font-medium text-xl'>Explore Auctions
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;