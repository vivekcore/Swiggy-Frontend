import { useEffect, useRef, useState } from "react"
import ResCard from "./ResCard";
import Simmer from "./simmer";
import InMindCard from "./InMindCard";
import { ArrowLeft, ArrowRight ,ChevronsDown, ChevronsUp  } from "lucide-react";
import { restaurants } from "../utils/AdditionRes";
import Cities from "./Cities";
import { Restrauntdata} from "../api/RestrauntApi";
import {Mind} from "../api/MindApi";
import { useQuery } from '@tanstack/react-query';

export default function Restraunt(){

  
    const [show,setShow] = useState(12);
    const RefofDis = useRef();
    const RefofRestraunt = useRef();
    let visiblecount = restaurants.slice(0,show);
    useEffect(()=>{
     visiblecount = restaurants.slice(0,show);
    },[show])

  
  const { data: Resdata, isLoading: isLoadingRes, isError: isErrorRes, error: errorRes } = useQuery({
  queryKey: ['Restrauntdata'],
  queryFn: Restrauntdata,
});

const { data: InMind, isLoading: isLoadingMind, isError: isErrorMind, error: errorMind } = useQuery({
  queryKey: ['InMinddata'],
  queryFn: Mind,
});


     if (isLoadingRes || isLoadingMind) return <Simmer />;
    if (isErrorRes || isErrorMind) return <p>Error loading data.</p>;


    const scroll = (direction) =>{
        const container = RefofDis.current;
        const container1 = RefofRestraunt.current;
        const distance = 600;

        if(direction === 'left'){
            container.scrollBy({left: -distance, behaviour: "smooth"});
        }
        else if(direction === 'right'){
            container.scrollBy({left: distance, behaviour: "smooth"});
        }
        else if(direction === 'left1'){
            container1.scrollBy({left: -distance, behaviour: "smooth"});
        }else{
            container1.scrollBy({left: distance, behaviour: "smooth"});
        }
    }

    return(
        <div className=" font-Quicksand custom-scroll mt-30">
          <div className="font-bold text-2xl w-[80%] mx-auto container mt-5 flex justify-between relative">
            <p>What's on your mind</p>
             <button onClick={()=>scroll('left')} className="absolute top-5 right-15 -translate-y-1/2 z-10 bg-gray-200 shadow p-2 rounded-full cursor-pointer"><ArrowLeft /></button>
            <button onClick={()=>scroll('right')} className="absolute top-5 right-0 -translate-y-1/2 z-10 bg-gray-200 shadow  p-2 rounded-full cursor-pointer"><ArrowRight /></button>
        </div>
        <div className=" border-b-pink-300 border-0 border-b-2  w-[80%] container mx-auto flex scroll-invi  overflow-x-auto gap-6 mt-3 pb-5 scroll-smooth " ref={RefofDis} >
            {
                InMind.map( (item) => <InMindCard key={item?.id} item={item}></InMindCard>)
            }
        </div>

       <div className="font-bold text-2xl w-[80%] mx-auto container mt-10 flex justify-between relative">
            <p>Top restaurant chains in Ludhiana</p>
             <button onClick={()=>scroll('left1')} className="absolute top-5 right-15 -translate-y-1/2 z-10 bg-gray-200 shadow p-2 rounded-full cursor-pointer"><ArrowLeft /></button>
            <button onClick={()=>scroll('right1')} className="absolute top-5 right-0 -translate-y-1/2 z-10 bg-gray-200 shadow  p-2 rounded-full cursor-pointer"><ArrowRight /></button>
        </div>
            <div className=" border-b-pink-300 border-0 border-b-2 w-[80%] container mx-auto  flex overflow-x-auto scroll-smooth gap-5 mt-5 pb-5 scroll-invi" ref={RefofRestraunt}>
            {
                Resdata.map((resinfo) => <ResCard key={resinfo?.info?.id} resinfo={resinfo}></ResCard>)
            }
            </div>
        
            <div className="w-[80%] mx-auto container mt-10 ">
                <p className="font-bold text-2xl">Restaurants with online food delivery in Ludhiana</p>
                <div className="w-full flex gap-5 mt-5 font-semibold [&>button]:opacity-70 [&>button]:border [&>button]:border-gray-800 [&>button]:rounded-2xl [&>button]:px-2 [&>button]:py-1 [&>button]:cursor-pointer">
                    <button>Filter</button>
                    <button>Sort By</button>
                    <button>Fast Deleviry</button>
                    <button>New on Swiggy</button>
                    <button>Ratings 4.O+</button>
                    <button>Pure Veg</button>
                    <button>Offers</button>
                    <button>Rs. 300-Rs. 600</button>
                    <button>Less than Rs.300</button>
                </div>
            </div>
            
             <div className=" border-b-pink-300 border-0 border-b-2 w-[80%] container mx-auto  flex flex-wrap scroll-smooth gap-5 mt-10 pb-5">
            {
                visiblecount.map((resinfo) => <ResCard key={resinfo?.info?.id} resinfo={resinfo}></ResCard>)
            }
            <div className="flex flex-col items-center justify-center w-full ">
             <button className="text-center  cursor-pointer hover:scale-[1.05] transition duration-200 flex  flex-col items-center text-orange-500 font-bold " onClick={()=>setShow(show+12)}><p className="font-[18px]">Show more</p><ChevronsDown></ChevronsDown></button>
            { visiblecount.length > 12 &&
                <button className="text-center mt-5 cursor-pointer hover:scale-[1.05] transition duration-200 flex  flex-col items-center text-orange-500 font-bold " onClick={()=>setShow(show-12)}><p className="font-[18px]">Show Less</p><ChevronsUp/></button>
            }
            </div>
            </div>
              <Cities online={"Best Restraunts in"} foodDelivery={"Best Places across Cities"}></Cities>
               <div className="mt-20">
              <img className="h-full w-full" src="https://i.postimg.cc/vmTtQCGj/Screenshot-74.png" alt="footer img"></img>
            </div>
        </div>
    )
}