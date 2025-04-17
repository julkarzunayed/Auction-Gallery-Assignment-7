import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import FavoriteItem from '../FavoriteItem/FavoriteItem';
import { RiCloseLargeFill } from "react-icons/ri";
import './FavoriteItems.css'

const FavoriteItems = ({ items, handleFavoriteItemsBtn, favoriteItemsToggle, cart }) => {
    // Counter for Total Bids Amount
    let amount = 0
    for (const item of items) {
        amount += item.currentBidPrice
    }//Counter end

    return (
        <div className='bg-white font-sora rounded-2xl overflow-auto'>
            <div className="flex relative justify-center gap-3 border-bottom p-8">
                <FaRegHeart size={26} />
                <h2 className='text-3xl font-medium'> Favorite Items</h2>
                <button
                    className={`text-3xl font-bold absolute right-10  text-red-500 ${cart ? "block" : "hidden"}`}
                    onClick={() => { favoriteItemsToggle() }}><RiCloseLargeFill />
                </button>
            </div>
            <div className="p-3">
                {//Condition for default Text in Favorite items
                    (items.length === 0) &&
                    <div
                        className="text-center p-12">
                        <h2 className='text-2xl font-medium mb-5'>No favorites yet</h2>
                        <p>Click the heart icon on any item to add it to your favorites</p>
                    </div>
                }
                {// Loping for Card
                    items.map(item => <FavoriteItem
                        handleFavoriteItemsBtn={handleFavoriteItemsBtn}
                        item={item}
                        key={item.id}></FavoriteItem>)
                }
            </div>
            <div className="flex justify-between text-2xl p-8 border-top">
                <h3>Total bids Amount</h3>
                <h3>$ {amount}</h3>
            </div>
        </div>
    );
};

export default FavoriteItems;