import { imageGridCards } from "../utils/FoodData"
import { useRef } from "react";
import Foodcard from "./Foodcard"
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function FoodOption(){

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
        <div className="w-[80%]  mx-auto mt-30 mb-20 relative font-Quicksand">
            <button onClick={() => scroll('left')} className="absolute top-0 right-15 -translate-y-1/2 z-10 bg-gray-200 shadow p-2 rounded-full cursor-pointer"><ArrowLeft /></button>
            <button onClick={() => scroll('right')} className="absolute top-0 right-0 -translate-y-1/2 z-10 bg-gray-200 shadow  p-2 rounded-full cursor-pointer"><ArrowRight /></button>
            <div className=" mx-auto overflow-x-auto scroll-smooth scroll-invi" ref={scrollRef}>
                <div className=" grid [grid-template-columns:repeat(10,minmax(184px,1fr))] grid-rows-2 gap-5.5  p-4">
                {
                    imageGridCards.map((food) => (<Foodcard key={food.id} foood={food} />))
                }
                </div>
            </div>
        </div>
    )
}
