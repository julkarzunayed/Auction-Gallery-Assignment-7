import React, { use } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = ({ itemsPromise, handleHeartBtnClick,favoriteItemId,items }) => {
    const promisedItems = use(itemsPromise)
    // console.log(items)
    return (
        <div className="font-sora font-normal">
            <table className='w-full bg-white rounded-3xl'>
                <thead className='text-black'>
                    <tr className=''>
                        <th className='text-left pl-5'>Items</th>
                        <th className=''>Current Bid</th>
                        <th>Time Left</th>
                        <th>Bid Now</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        promisedItems.map(item => <Item 
                            favoriteItemId={favoriteItemId}
                            handleHeartBtnClick={handleHeartBtnClick}
                            key={item.id}
                            items={items} 
                            item={item}
                            ></Item>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Items;


// id
// title
// description
// currentBidPrice
// timeLeft
// bidsCount
// imag


// const jjd = [
//     {id: 1, title:"Vintage Leica M3 Camera", description:'kk', currentBidPrice: 2850, timeLeft: 2, bidDisCount: "5%", img: "https://i.ibb.co.com/VYPyCgvL/Bid1-min.png"},
//     {id: 2, title:"1965 Gibson SG Standard Electric Guitar", description:'kk', currentBidPrice: 2850, timeLeft: 3, bidDisCount: "5%", img: "https://i.ibb.co.com/HDB4tp0D/Bid2-min.png"},
//     {id: 3, title:"Original Apple Macintosh 128K (1984)", description:'kk', currentBidPrice: 2850, timeLeft: 2, bidDisCount: "5%", img: "https://i.ibb.co.com/DDcxbP8m/Bid3-min.png"},
//     {id: 4, title:"Rolex Submariner 16610", description:'kk', currentBidPrice: 2850, timeLeft: 4, bidDisCount: "5%", img: "https://i.ibb.co.com/rKLP4QfW/Bid4-min.png"},
//     {id: 5, title:"First Edition 'The Great Gatsby' by F. Scott Fitzgerald", description:'kk', currentBidPrice: 2850, timeLeft: 2, bidDisCount: "5%", img: "https://i.ibb.co.com/QFKWm7Wr/Bid6-min.png"},
//     {id: 6, title:"Mid-Century Modern Eames Lounge Chair", description:'kk', currentBidPrice: 2850, timeLeft: 1, bidDisCount: "5%", img: "https://i.ibb.co.com/2YpMhQQp/Bid5-min.png"},
//     {id: 7, title:"Banksy Original Screen Print", description:'kk', currentBidPrice: 2850, timeLeft: 5, bidDisCount: "5%", img: "https://i.ibb.co.com/Wv1t3XtM/Bid7-min.png"}
// ]