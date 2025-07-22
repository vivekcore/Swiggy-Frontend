import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router";
import { ChevronDown, BriefcaseBusiness, SearchIcon, BadgePercent, LifeBuoy, ShoppingCart , User  } from 'lucide-react';

export default function ResHeader(){

   const counter1 = useSelector(state => state.cartsslice.count);
   const counter2 = useSelector(state => state.cartsslice.count2);
   const counter = counter1+counter2;
    return(
        <div className="font-Quicksand w-full py-4 px-16 shadow-gray-200 shadow-md z-50 top-0 bg-white fixed flex justify-between">
           <div className="flex ">
                <div><img className="h-13 w-13 mr-4 object-cover rounded-[12px]"  src="https://assets-netstorage.groww.in/stocks-ipo/logos/Swiggy_logo.png " alt="swiggy logo"></img></div>
                <div className="text-[18px] flex items-center justify-center font-bold"><p className="underline decoration-2 underline-offset-4 px-4 ">Other</p><ChevronDown></ChevronDown></div>
           </div>

           <div className="flex items-center font-semibold text-[17px] ">
                <div className="flex items-center gap-2.5 cursor-pointer hover:text-[#ff5200] "><BriefcaseBusiness></BriefcaseBusiness><p className="pr-13">Swiggy Corporate</p></div>
                <div className="flex items-center gap-2.5 cursor-pointer hover:text-[#ff5200]"><SearchIcon></SearchIcon><p className="pr-13">Search</p></div>
                <div className="flex items-center gap-2.5 cursor-pointer hover:text-[#ff5200]"><BadgePercent></BadgePercent><p className="pr-13">Offers</p></div>
                <div className="flex itemx-center gap-2.5 cursor-pointer hover:text-[#ff5200]"><LifeBuoy/><p className="pr-13">Help</p></div>
                <div className="flex items-center gap-2.5 cursor-pointer hover:text-[#ff5200]"><User/><p className="pr-13">Sign In</p> </div>
                <Link to="/checkout" >
                <div className="flex items-center gap-2.5 cursor-pointer hover:text-[#ff5200]">
                    <div className="relative h-10 w-10 flex items-center justify-center">
                        <ShoppingCart/>
                        <div className="absolute rounded-full bg-[#ff5200] top-1 h-4 w-4 right-0 text-[12px] text-center text-white hover:text-white">{counter}</div>
                    </div>
                    <p>Cart</p></div>
                </Link>
           </div>
        </div>
    )
}