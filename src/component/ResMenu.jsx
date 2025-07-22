import { useEffect, useState } from "react";
import { MenuResApi } from "../api/MenuResApi";
import {ResHeadApi} from "../api/ResHeadApi"
import Menucard from "./menucard";
import Simmer from "./simmer";
import { Link } from "react-router";
import { SearchIcon,DotIcon } from "lucide-react";
import { useQuery } from '@tanstack/react-query';
import { useParams } from "react-router"

export default function ResMenu(){

let {id} = useParams();
    
    const [type,setType] = useState(null);

   
    const {data:ResData, isError:isErrorRestorent, isLoading:isLoadingRestorent, error:ResError} = useQuery({
        queryKey: ['MenuREstrauntData',id],
        queryFn: () => MenuResApi(id)
    })

    const {data:HeaderofMenu, isError:isErroHead, isLoading:isLoadingHead, error:HeadError} = useQuery({
      queryKey: ['HeadofReastaunt',id],
      queryFn: () => ResHeadApi(id)
    })

    if (isLoadingRestorent || isLoadingHead) return <Simmer />;
    if (isErrorRestorent || isErroHead) return <p>Error loading data.</p>;
        const handleToggle = (newType) => {
            setType((prevType) => (prevType === newType ? null : newType));
        };

 
    return(
        <div className="font-Quicksand container mx-auto w-[100vw] mt-30 custom-scroll">
           
        {/* Header for every buying page */}
        <div className="w-[70%] mx-auto container mt-15">
            {/* heading */}
            <div>
                <div className="text-3xl font-bold tracking-wide">{HeaderofMenu?.cards[0]?.card?.card?.text}</div>
            </div>
            {/* first info */}
            <div className="w-full border-t-0 border border-gray-100 py-6 rounded-3xl bg-gradient-to-t from-gray-200 to-white">
                <div className=" bg-white border border-gray-200 p-5 flex flex-col gap-1 rounded-3xl w-[95%] mx-auto">
                <div className="flex font-bold text-[18px] items-center">
                    <span className="flex ">
                        <img className="h-6.5 w-6.5" src="https://i.postimg.cc/bNmf72T7/star-icon-symbol-sign-vector-removebg-preview.png"/>
                        <span>{HeaderofMenu?.cards[2]?.card?.card?.info?.avgRatingString+"("+HeaderofMenu?.cards[2]?.card?.card?.info?.totalRatingsString+")"}</span>
                    </span>
                    <DotIcon className="inline-block opacity-50 mt-1 h-7 w-7"/>
                    <span>{HeaderofMenu?.cards[2]?.card?.card?.info?.costForTwoMessage}</span>
                </div>
                <div className="font-bold text-orange-500 underline">
                    {HeaderofMenu?.cards[2]?.card?.card?.info?.cuisines.map((val, i) => (
                        <span key={i}>
                            {val}
                            {i !== (val.length - 1) && ', '}
                        </span>
                    ))}
                </div>
                <div className="font-bold flex flex-col gap-1">
                    <div >Outlet<span className="opacity-50 font-normal">{" "+HeaderofMenu?.cards[2]?.card?.card?.info?.areaName}</span></div>
                    <div> { HeaderofMenu?.cards[2]?.card?.card?.info?.sla?.slaString.toLowerCase()}</div>
                </div>
                </div>
            </div>

            {/* Deals for you */}

            <div>
                <p className="text-[22px] font-bold  tracking-wide my-5">Deals for you</p>
                <div className="flex overflow-x-auto scroll-invi gap-4">{HeaderofMenu?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers.map((val) => (
                    <div key={val?.info?.offerIds[0]} className=" p-[12px] min-w-82 min-h-18 flex justify-center items-center border rounded-3xl border-gray-400 cursor-pointer">
                        <div><img className="h-14 w-14" src={`https://media-assets.swiggy.com/swiggy/image/upload/${val.info.offerLogo}`}/></div>
                        <div className="ml-3" >
                            <p className="font-bold text-[18px]" >{val?.info?.header}</p>
                            <p className="font-bold opacity-50 text-[14px]">{val?.info?.description}</p>
                        </div>
                    </div>
                ) )}</div>
            </div>
          <div className="text-center font-semibold  text-gray-500 w-full text-base my-5">❀ ＭＥＮＵ ❀</div>
        </div>

            <div className=" container mx-auto  w-[70%]">
                <div className="relative mb-5">
                    <Link to={`/city/ludhiana/${id}/search`}>
                    <SearchIcon className="absolute top-3 right-4 text-gray-600"/>
                    <p className="p-3 text-[18px] text-center bg-gray-200 border-neutral-300 border rounded-2xl  tracking-wide text-gray-600">Search for Dishes</p>
                    </Link>
                </div>
            <div className=" w-full flex"> 
                    
       <div className="flex flex-wrap items-center justify-center gap-12 p-4">
      <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={type === 'veg'}
          onChange={() => handleToggle('veg')}
        />
        <div
          className={`w-12 h-7 rounded-full transition-colors duration-200 ${
            type === 'veg' ? 'bg-green-500' : 'bg-slate-300'
          }`}
        ></div>
        <span
          className={`dot absolute left-1 top-1 w-5 h-5 rounded-full bg-white transition-transform duration-200 ease-in-out ${
            type === 'veg' ? 'translate-x-5' : ''
          }`}
        ></span>
        ᐯEG
      </label>
      <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={type === 'nonveg'}
          onChange={() => handleToggle('nonveg')}
        />
        <div
          className={`w-12 h-7 rounded-full transition-colors duration-200 ${
            type === 'nonveg' ? 'bg-red-500' : 'bg-slate-300'
          }`}
        ></div>
        <span
          className={`dot absolute left-1 top-1 w-5 h-5 rounded-full bg-white transition-transform duration-200 ease-in-out ${
            type === 'nonveg' ? 'translate-x-5' : ''
          }`}
        ></span>
        ᑎOᑎᐯEG
      </label>
    </div>
    
                </div>
                <div className=" border-0 border-b-2 mt-5 border-gray-400"></div>
            </div>
       <div className="container mx-auto w-full ">
        {
            ResData.map((menu) => <Menucard key={menu?.card?.card?.title} menu={menu?.card?.card} foodselected={type}></Menucard>)
        }
       </div>
       </div>
    )
}

