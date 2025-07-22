import { GroceriesData } from "../utils/GroceriesData";
import GroceriesCard from "./GroceriesCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
export default function Groceries(){

    const scrollRef = useRef();
    const scroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = 600;

        if (direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }
    return(
        <div className="w-[80%] font-Quicksand container mx-auto mt-10 relative ">
            <button onClick={()=>scroll('left')} className="absolute top-5 right-15 -translate-y-1/2 z-10 bg-gray-200 shadow p-2 rounded-full cursor-pointer"><ArrowLeft /></button>
            <button onClick={()=>scroll('right')} className="absolute top-5 right-0 -translate-y-1/2 z-10 bg-gray-200 shadow  p-2 rounded-full cursor-pointer"><ArrowRight /></button>
            <h1 className="text-3xl font-bold">Shop Groceries on Instamart</h1>
            <div className=" w-[100%] container mx-auto overflow-x-auto flex scroll-smooth gap-12 mt-8 scroll-invi" ref={scrollRef}>
                   {
                    GroceriesData.map((GData) =><GroceriesCard key={GData.id} GData={GData}></GroceriesCard>)
                   }  
            </div>
        </div>
    )
}