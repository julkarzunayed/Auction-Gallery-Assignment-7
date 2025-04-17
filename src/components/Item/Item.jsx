
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import './Item.css'

let image = []; //Image link container fog Items
const Item = ({ item, handleHeartBtnClick, favoriteItemId, items }) => {
    const { title, id, img, timeLeft, currentBidPrice } = item;

    // Conditional Toggling
    let condition = true;
    if (favoriteItemId.includes(id)) {
        condition = false
    }


    //Items Background Image
    const bg = {
        backgroundImage: "url(" + img + ")",
    }
    for (const item of items) {
        if (id === item.id) {
            image.push(id)
        }
    }

    return (
        <tr className='text-lg'>
            <td className='flex gap-10'>
                {/* Image Box */}
                <div style={bg} className={`w-[100px] h-[100px] bg-center bg-cover`}>
                </div>
                <p className='text-lg mt-3'>{title}</p>
            </td>
            <td className='font-medium'>${currentBidPrice}</td>
            <td className='font-medium'>{timeLeft} Days left</td>
            <td className='pr-5'>
                {/* <button style={{pointerEvents: 'none'}} className={(condition)?"hidden" : "block"} >
                    <IoIosHeart color='red' size={30}/>
                </button>
                <button disabled={true}  className={(!condition)? "hidden" : "block"} onClick={() => {
                    handleHeartBtnClick(item);
                    }}>
                    <FaRegHeart size={28} />
                </button> */}
                <button
                    style={{cursor: (!condition)? "not-allowed": "pointer"}}
                    onClick={() => {
                        handleHeartBtnClick(item);
                    }}
                    disabled={!condition}
                    title={(!condition)? "Disabled": "Click"}
                >
                    <span className={(!condition) ? "hidden" : "block"} >
                        <FaRegHeart size={28} />
                    </span>
                    <span className={(condition) ? "hidden" : "block"} >
                        <IoIosHeart color='red' size={30} />
                    </span>
                </button>
            </td>
        </tr>
    );
};
export default Item;
