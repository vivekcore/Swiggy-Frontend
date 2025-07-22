
import { addItems,IncrementItems,DecrementItems,addItems2,IncrementItems2,DecrementItems2 } from "../stored/CartSlicer";
import {useDispatch, useSelector} from "react-redux";

export default function MenuData({item}){


    // const [count,setCount] = useState(0);
   
    const dispatch = useDispatch();
    const items = useSelector(state=>state.cartsslice.items)
    const items2 = useSelector(state=>state.cartsslice.items2)
    

const element = items.find((itm) => itm?.id === item?.card?.info?.id);
const element2 = items2.find((itm) => itm?.id === (item?.dish?.info?.id || item?.bannerId));
const count = element ? element.quantity : 0;
const count2 = element2 ? element2.quantity : 0;


function handleAddItems() {
    dispatch(addItems(item));
}
function handleIncItems() {
    dispatch(IncrementItems(item));
}
function handleDecItems() {
    dispatch(DecrementItems(item));
}
function handleAddItems2() {
    dispatch(addItems2(item));
}
function handleIncItems2() {
    dispatch(IncrementItems2(item));
}
function handleDecItems2() {
    dispatch(DecrementItems2(item));
}

    return(
        <div className="font-Quicksand">
            {
                item.card ? (
                    <div className=" flex w-full gap-20 h-60 p-3 border-b border-gray-400  justify-between">
        <div className="w-140 h-55">
            <p className="text-[20px] text-gray-500 font-bold p-2">{item?.card?.info?.name}</p>
            <span className="p-2 text-[20px] font-bold">
                {"₹" + (Math.floor("defaultPrice" in item?.card?.info ? (item.card.info.defaultPrice / 100) : (item.card.info.price / 100)))}
            </span>
            <span className="p-2 text-[20px] font-bold">{item?.card?.info?.category}</span>
            <p className="font-semibold opacity-70 pt-2 pl-2 line-clamp-2 text-[18px]">{item?.card?.info?.description}</p>
            
        </div>
            <div className="h-54 relative flex justify-center">
                <img className="w-50 rounded-2xl object-cover h-48 " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+item?.card?.info?.imageId} />
                {
                    count === 0 ? (<button onClick={()=>handleAddItems()} className="font-bold text-[18px] text-green-700 absolute bottom-1.5 border-[1px] border-amber-900  p-1  bg-white w-30 rounded-[8px] transform hover:bg-gray-200  transition duration-300">Add</button>) : (
                        <div className="w-30 flex justify-between  absolute bottom-1.5 border-[1px] border-amber-900 p-1 bg-white rounded-[8px]">
                            <button  onClick={()=>handleDecItems()} className=" font-bold w-10 text-[18px] cursor-pointer  transition duration-300 text-center border-0 font-stretch-200%">‒</button>
                            <span className="text-center font-bold text-[18px] w-10">{count}</span>
                            <button  onClick={()=>handleIncItems()} className=" font-bold w-10 text-[18px] cursor-pointer transition duration-300 border-0 text-center">+</button>
                        </div>
                    )
                }
                
            </div>
                    </div>
                ) : 
                <div >
                    <div className="min-h-78 min-w-78 border-0 relative ">
                       <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.dish?.info?.imageId}`}
                            className="h-78 w-78 object-cover rounded-3xl"
                       ></img>
                       <div className="absolute inset-0 pointer-events-none rounded-3xl bg-[radial-gradient(transparent_0,rgba(0,0,0)_100%)]"></div>

                      {  count2 === 0 ? (<button onClick={()=>handleAddItems2()} className="font-bold text-[18px] text-green-700 absolute bottom-5 right-5 border-[1px] border-amber-900  p-1  bg-white w-30 rounded-[8px] transform hover:bg-gray-200  transition duration-300 cursor-pointer">Add</button>) : (
                        <div className="w-30 flex justify-between  absolute bottom-5 right-5 border-[1px] border-amber-900 p-1 bg-white rounded-[8px] cursor-pointer">
                            <button  onClick={()=>handleDecItems2()} className=" font-bold w-10 text-[18px] cursor-pointer  transition duration-300 text-center border-0 font-stretch-200%">‒</button>
                            <span className="text-center font-bold text-[18px] w-10">{count2}</span>
                            <button  onClick={()=>handleIncItems2()} className=" font-bold w-10 text-[18px] cursor-pointer transition duration-300 border-0 text-center">+</button>
                        </div>
                    )
                    }
                { 'price' in item?.dish?.info && 'finalPrice' in item?.dish?.info ?
                    (<p className="absolute bottom-10 left-5 line-through text-white font-semibold text-[20px] mr-2 ">
                    {"₹"+(item?.dish?.info?.price)/100}</p>
                        ) :
                    ( 'defaultPrice' in item?.dish?.info && 'finalPrice' in item?.dish?.info ?(
                    <p className="absolute bottom-10 left-5 line-through text-white font-semibold text-[20px] mr-2 ">
                    {"₹"+(item?.dish?.info?.defaultPrice)/100}</p>
                    ) : ('price' in item?.dish?.info ? 
                        (<p className="absolute bottom-10 left-5  text-white font-semibold text-[20px] mr-2 ">
                    {"₹"+(item?.dish?.info?.price)/100}</p>
                        ) :  <p className="absolute bottom-10 left-5  text-white font-semibold text-[20px] mr-2 ">
                    {"₹"+(item?.dish?.info?.defaultPrice)/100}</p>
                    )
                 )
                }
                { 'finalPrice' in item.dish.info &&
                (<p className="absolute bottom-5 left-5  text-white font-semibold text-[18px] mr-2 ">{"₹"+(item?.dish?.info?.finalPrice)/100}</p>)
               
                }
                <div className="absolute top-10 left-5 ">
                    <p className="text-[18px] text-shadow-black text-white w-63 font-bold line-clamp-1">{item?.dish?.info?.name}</p>
                    <p className="text-[14px] text-shadow-black text-white opacity-90 w-63  line-clamp-2">{item?.dish?.info?.description}</p>
                </div>
                    </div>
                </div>   
            }
        </div>
    )
}


