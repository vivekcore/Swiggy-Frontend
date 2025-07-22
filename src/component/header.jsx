import { Link } from "react-router";
import { ArrowUpRight } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Search } from 'lucide-react';

function Header(){

    return(
        <header className="bg-[#ff5200] font-Quicksand ">
            <div className="flex justify-between container mx-auto pt-10 pb-0  px-8">
                <img className="w-44 h-14" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="swiggy Logo" />
                <div className=" text-white text-[17px] font-bold flex gap-10 items-center">
                    <a className="" target="blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a className="" href="">Partnet with us</a>
                    <a className="border border-white py-4 px-4 rounded-2xl w-42 flex gap-0.5" href="">Get The App< ArrowUpRight className="h-7 w-7"></ArrowUpRight></a>
                    <a className="bg-black border border-black py-4 px-4 rounded-2xl w-40 text-center" href="">Sign in</a>
                </div>
            </div>

            <div className="py-12 px-8  text-center relative ">
                <img className="h-128 w-70 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="Vegitables " />
                 <img className="h-128 w-70 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="Food" /> 
                <div className=" pt-10 leading-15 text-[50px] text-white container mx-auto max-w-[60%] font-extrabold  "> 
                    Order Food & groceries. Discovere best restaurants. Swiggy it!
                </div>

                <div className="max-w-[75%] container mx-auto flex gap-4 justify-center pt-10">
                    <div className="w-85 h-17 bg-white flex justify-around px-4 items-center rounded-2xl">
                        <MapPin className="h-8 w-8 text-orange-500 "></MapPin>
                        <input className="w-51 h-14.5 placeholder:font-bold "  type="text" placeholder="Enter your delivery location"/>
                        <ChevronDown className="h-8 w-8 opacity-50"></ChevronDown>
                    </div>
                        <div className="w-121 h-17 bg-white flex px-4 justify-between  items-center rounded-2xl" >
                            <input className="w-68.5 h-5.5 pl-4 placeholder:font-bold" type="text" placeholder="Search for restraunts"/>
                            <Search className="h-8 w-8 opacity-50"/>
                    </div>
                </div>

            </div>
            <div className="max-w-[80%]  container mx-auto flex">
                <Link to="/restraunt">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png" alt="" />
                </Link>
                <a target="blank" href="https://www.swiggy.com/dineout">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/8fa21ee7-affd-43a4-b14d-978c9b372159_DO2BU.png" alt="" />
                </a>
            </div>
        </header>
    )
}
export default Header;