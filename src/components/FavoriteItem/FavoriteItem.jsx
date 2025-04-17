import React from 'react';
import { RiCloseLargeFill } from "react-icons/ri";



const FavoriteItem = ({ item, handleFavoriteItemsBtn }) => {
    const { title,id, img, currentBidPrice } = item;
    const bg = {
        backgroundImage: "url(" + img + ")",
    }
    
    return (
        <div className='flex justify-between gap-3.5 p-4 border-bottom'>
            <div className="flex gap-4 ">
                <div className="">
                    {/* Favorite Items image box */}
                    <div style={bg} className={`w-[100px] h-[100px] bg-center bg-cover`}>
                    </div>
                </div>
                <div className="">
                    <p>{title}</p>
                    <div className="flex gap-8 mt-8">
                        <p>${currentBidPrice} </p>
                        <p>Bids: 12</p>
                    </div>
                </div>
            </div>
            <div className="text-2xl">
                <button onClick={()=> { handleFavoriteItemsBtn(id)}}><RiCloseLargeFill />
                </button>
                
            </div>
        </div>
    );
};

export default FavoriteItem;