import { useRef } from "react";
import { dineoutRestaurants } from "../utils/DineoutData"
import DineoutCard from "./DineoutCard"
import { ArrowLeft, ArrowRight } from "lucide-react";
export default function Dineout(){

    
     const scrollRef = useRef();
    const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 450;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

    return(
        <div className="w-[80%] font-Quicksand container mx-auto mt-20 relative">
            <button onClick={() => scroll('left')} className="absolute top-5 right-15 -translate-y-1/2 z-10 bg-gray-200 shadow p-2 rounded-full cursor-pointer"><ArrowLeft /></button>
            <button onClick={() => scroll('right')} className="absolute top-5 right-0 -translate-y-1/2 z-10 bg-gray-200 shadow  p-2 rounded-full cursor-pointer"><ArrowRight /></button>
            <p className="text-3xl font-bold">Discover best restaurants on Dineout</p>
            <div className="flex flex-nowrap overflow-x-auto gap-5 mt-10 px-2.5 pb-5 scroll-smooth scroll-invi " ref={scrollRef}>
                {
                    dineoutRestaurants.map((restData) => <DineoutCard key={restData?.info?.id} restData={restData}></DineoutCard>)
                }
            </div>
        </div>
    )
}