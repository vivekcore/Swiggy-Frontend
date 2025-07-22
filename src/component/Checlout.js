import { useDispatch, useSelector } from "react-redux";
import { LifeBuoy, User } from 'lucide-react';
import { addItems, IncrementItems, DecrementItems, addItems2, IncrementItems2, DecrementItems2 } from "../stored/CartSlicer";

export default function Checkout() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cartsslice.items);
    const items2 = useSelector(state => state.cartsslice.items2);

    const calculateTotal = (itemsList) => {
        return itemsList.reduce((total, item) => {
            const price = Math.floor(
                "defaultPrice" in (item.card?.info || item.dish?.info)
                    ? (item.card?.info?.defaultPrice || item.dish?.info?.defaultPrice) / 100
                    : (item.card?.info?.price || item.dish?.info?.price) / 100
            );
            return total + (price * item.quantity);
        }, 0);
    };

    const itemTotal = calculateTotal(items) + calculateTotal(items2);
    const discount = Math.floor(itemTotal * 0.1);
    const toPay = itemTotal - discount; // we can add discount 

    return (
        <div className="font-Quicksand">
            { toPay ? (<>
            <div className="w-full mb-10 py-4 px-16 shadow-gray-400 shadow flex justify-between">
                <div className="flex">
                    <div>
                        <img
                            className="h-13 w-13 mr-4 object-cover rounded-[12px]"
                            src="https://assets-netstorage.groww.in/stocks-ipo/logos/Swiggy_logo.png"
                            alt="swiggy logo"
                        />
                    </div>
                    <div className="text-base flex items-center justify-center font-bold">
                        <p className="px-4 uppercase">Secure Checkout</p>
                    </div>
                </div>
                <div className="flex items-center font-semibold text-[17px]">
                    <div className="flex items-center gap-2.5 cursor-pointer hover:text-[#ff5200]">
                        <LifeBuoy />
                        <p className="pr-13">Help</p>
                    </div>
                    <div className="flex items-center gap-2.5 cursor-pointer hover:text-[#ff5200]">
                        <User />
                        <p className="pr-13">Sign In</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-5">
                <div className="w-[50%] ml-10 shadow-lg overflow-y-auto max-h-120 border border-gray-400 custom-scroll">
                    <div>
                        {items.map((item) => (
                            <div
                                key={item?.card?.info?.id}
                                className="w-full flex gap-5 h-60 p-3 border-b border-gray-400 justify-between"
                            >
                                <div className="w-140 h-55">
                                    <p className="text-[20px] text-gray-500 font-bold p-2">{item?.card?.info?.name}</p>
                                    <span className="p-2 text-[20px] font-bold">
                                        {"₹" + (Math.floor("defaultPrice" in item.card.info ? (item.card.info.defaultPrice / 100) : (item.card.info.price / 100)))}
                                    </span>
                                    <span className="p-2 text-[20px] font-bold">{item?.card?.info?.category}</span>
                                    <p className="font-semibold opacity-70 pt-2 pl-2 line-clamp-2 text-[18px]">
                                        {item?.card?.info?.description}
                                    </p>
                                </div>
                                <div className="h-54 relative flex justify-center">
                                    <img
                                        className="w-50 rounded-2xl object-cover h-48"
                                        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + item?.card?.info?.imageId}
                                    />
                                    {item.quantity === 0 ? (
                                        <button
                                            onClick={() => dispatch(addItems(item))}
                                            className="font-bold text-[18px] text-green-700 absolute bottom-1.5 border-[1px] border-amber-900 p-1 bg-white w-30 rounded-[8px] transform hover:bg-gray-200 transition duration-300"
                                        >
                                            Add
                                        </button>
                                    ) : (
                                        <div className="w-30 flex justify-between absolute bottom-1.5 border-[1px] border-amber-900 p-1 bg-white rounded-[8px]">
                                            <button
                                                onClick={() => dispatch(DecrementItems(item))}
                                                className="font-bold w-10 text-[18px] cursor-pointer transition duration-300 text-center border-0 font-stretch-200%"
                                            >
                                                −
                                            </button>
                                            <span className="text-center font-bold text-[18px] w-10">{item.quantity}</span>
                                            <button
                                                onClick={() => dispatch(IncrementItems(item))}
                                                className="font-bold w-10 text-[18px] cursor-pointer transition duration-300 border-0 text-center"
                                            >
                                                +
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        {items2.map((item) => (
                            <div
                                key={item?.dish?.info?.id}
                                className="flex w-full gap-5 h-60 p-3 border-b border-gray-400 justify-between"
                            >
                                <div className="w-140 h-55">
                                    <p className="text-[20px] text-gray-500 font-bold p-2">{item?.dish?.info?.name}</p>
                                    <span className="p-2 text-[20px] font-bold">
                                        {"₹" + (Math.floor("defaultPrice" in item.dish.info ? (item.dish.info.defaultPrice / 100) : (item.dish.info.price / 100)))}
                                    </span>
                                    <p className="font-semibold opacity-70 pt-2 pl-2 line-clamp-2 text-[18px]">
                                        {item?.dish?.info?.description}
                                    </p>
                                </div>
                                <div className="h-54 relative flex justify-center">
                                    <img
                                        className="w-50 rounded-2xl object-cover h-48"
                                        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + item?.dish?.info?.imageId}
                                    />
                                    {item.quantity === 0 ? (
                                        <button
                                            onClick={() => dispatch(addItems2(item))}
                                            className="font-bold text-[18px] text-green-700 absolute bottom-1.5 border-[1px] border-amber-900 p-1 bg-white w-30 rounded-[8px] transform hover:bg-gray-200 transition duration-300"
                                        >
                                            Add
                                        </button>
                                    ) : (
                                        <div className="w-30 flex justify-between absolute bottom-1.5 border-[1px] border-amber-900 p-1 bg-white rounded-[8px]">
                                            <button
                                                onClick={() => dispatch(DecrementItems2(item))}
                                                className="font-bold w-10 text-[18px] cursor-pointer transition duration-300 text-center border-0 font-stretch-200%"
                                            >
                                                −
                                            </button>
                                            <span className="text-center font-bold  text-[18px] w-10">{item.quantity}</span>
                                            <button
                                                onClick={() => dispatch(IncrementItems2(item))}
                                                className="font-bold w-10 text-[18px] cursor-pointer transition duration-300 border-0 text-center"
                                            >
                                                +
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-[45%] mr-10  border border-gray-400 px-6 shadow-lg ">
                    <div className="  flex items-center justify-center text-base font-semibold tracking-wider pb-2">
                        <h2 >Your Order Summary</h2>
                    </div>
                    <div className="overflow-y-auto max-h-40 custom-scroll pr-4">
                    {items.map((item) => (
                        item.quantity > 0 && (
                            <div key={item?.card?.info?.id} className="flex items-center py-2 border-b">
                                <div className="text-gray-700 font-semibold truncate w-[60%]">{item?.card?.info?.name} ({item.quantity} pc)</div>
                                <div className="flex items-center   ">
                                    <div className="border rounded-[6px] border-gray-500 ml-2 ">
                                    <button
                                        onClick={() => dispatch(DecrementItems(item))}
                                        className="text-xl font-bold px-2 cursor-pointer"
                                    >
                                        −
                                    </button>
                                    <span className="mx-2 font-bold">{item.quantity}</span>
                                    <button
                                        onClick={() => dispatch(IncrementItems(item))}
                                        className="text-xl font-bold px-2 cursor-pointer"
                                    >
                                        +
                                    </button>
                                    </div>
                                    <div className="ml-8 font-semibold p-2">
                                        {"₹" + (Math.floor("defaultPrice" in item.card.info ? (item.card.info.defaultPrice / 100) : (item.card.info.price / 100)) * item.quantity)}
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                    {items2.map((item) => (
                        item.quantity > 0 && (
                            <div key={item?.dish?.info?.id} className="flex items-center py-2 border-b">
                                <span className="text-gray-700 font-semibold truncate w-[70%]">{item?.dish?.info?.name} ({item.quantity} pc)</span>
                               
                                <div className="flex items-center">
                                    <div className="border rounded-[6px] border-gray-500 ">
                                    <button
                                        onClick={() => dispatch(DecrementItems2(item))}
                                        className="text-xl font-bold px-2 cursor-pointer"
                                    >
                                        −
                                    </button>
                                    <span className="mx-2 font-bold">{item.quantity}</span>
                                    <button
                                        onClick={() => dispatch(IncrementItems2(item))}
                                        className="text-xl font-bold px-2 cursor-pointer"
                                    >
                                        +
                                    </button>
                                        </div>
                                    <span className="ml-8 p-2 font-semibold">
                                        {"₹" + (Math.floor("defaultPrice" in item.dish.info ? (item.dish.info.defaultPrice / 100) : (item.dish.info.price / 100)) * item.quantity)}
                                    </span>
                                </div>
                            </div>
                        )
                    ))}
                    </div>
                    <p className="text-sm font-mono w-full text-center  text-gray-800 mt-2 italic">"Any suggestions? We will pass it on..."</p>
                    <div className="mt-4">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm font-semibold italic tracking-wide text-gray-700">
                                Opt for No-contact Delivery<br />
                                Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)
                            </span>
                        </label>
                    </div>
                    <div className="mt-6">
                        <p className="text-lg font-semibold">Bill Details</p>
                        <div className="flex justify-between mt-2">
                            <span>Item Total</span>
                            <span className="font-semibold">₹{itemTotal}</span>
                        </div>
                        <div  className="flex justify-between mt-2 border-b-gray-600 border-b-2 pb-2  border-0">
                            <span>Discount</span>
                            <span className="font-semibold">₹{discount}</span>
                        </div>
                        <div className="flex justify-between mt-2 text-xl font-bold">
                            <span>TO PAY</span>
                            <span>₹{toPay}</span>
                        </div>
                    </div>
                </div>
            </div>
           </> ) :
                <div className="w-full h-full">

                      <div className="w-full mb-10 py-4 px-16 shadow-gray-400 shadow flex justify-between">
                <div className="flex">
                    <div>
                        <img
                            className="h-13 w-13 mr-4 object-cover rounded-[12px]"
                            src="https://assets-netstorage.groww.in/stocks-ipo/logos/Swiggy_logo.png"
                            alt="swiggy logo"
                        />
                    </div>
                    <div className="text-base flex items-center justify-center font-bold">
                        <p className="px-4 uppercase">Secure Checkout</p>
                    </div>
                </div>
                <div className="flex items-center font-semibold text-[17px]">
                    <div className="flex items-center gap-2.5 cursor-pointer hover:text-[#ff5200]">
                        <LifeBuoy />
                        <p className="pr-13">Help</p>
                    </div>
                    <div className="flex items-center gap-2.5 cursor-pointer hover:text-[#ff5200]">
                        <User />
                        <p className="pr-13">Sign In</p>
                    </div>
                </div>
            </div >
            <div className="flex justify-center  w-full">
                <img className="h-[50%] w-[50%]" src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7236766-5875081.png"></img>
            </div>
            </div>
            }
        </div>
    );
}