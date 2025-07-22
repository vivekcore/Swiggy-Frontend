import { cities } from "../utils/CitiesData"
import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, Factory } from 'lucide-react';


export default function Cities({online,foodDelivery}){

    const [showAll, setShowAll] = useState(false); 
    const [showAll2,setShowAll2] = useState(true)
        const showLessRef = useRef()
        const shwoMoreRef = useRef()
        const visibleItems = showAll ? cities : cities.slice(0, 11); 
        const showMoreButton = !showAll ? cities[11] : null; 
        
        const set = () =>{
            setShowAll(false);
            setShowAll2(false);
        }
        const set2 = () =>{
            setShowAll(true)
            setShowAll2(true)
        }
        useEffect(() => {
        if (showAll && showLessRef.current) {
          showLessRef.current.scrollIntoView({ behavior: 'smooth', block: "center" });
        }
        if(!showAll2 ){
          shwoMoreRef.current.scrollIntoView({behavior:'smooth',block: "center"});
        }
        }, [showAll]);

    return(
        <>
             <div className="mx-auto w-[68%] mt-10 font-Quicksand">
                <div ref={shwoMoreRef} className="font-bold text-3xl">{foodDelivery}</div>
                <div className="grid grid-cols-4 gap-5 mt-4">
                    {
                        visibleItems.map(val => (
                            <div key={val.text} className="p-4 text-[16px] font-semibold rounded-2xl flex items-center justify-center border border-gray-500">
                                <a href={val.link} target="blank">
                                    <p className="text-center opacity-80">{online}</p>
                                    <p className="text-center opacity-80">{val.text}</p>
                                </a>
                            </div>
                        ))
                    }
                    {
                        showMoreButton && (
                            <p className="p-4 text-[16px] font-bold rounded-2xl gap-1 scroll-smooth cursor-pointer flex items-center justify-center border border-gray-500 text-orange-500 " onClick={()=> set2()}>Show more<ChevronDown></ChevronDown></p>
                        )
                    }
                    {
                        showAll &&(
                            <p ref={showLessRef} className="p-4 text-[16px] scroll-smooth font-bold rounded-2xl gap-1 cursor-pointer flex items-center justify-center border border-gray-500 text-orange-500 " 
                            onClick={()=>set()}
                            >Show less<ChevronUp></ChevronUp></p>
                        )
                    }
                </div>
            </div>
        </>
    )
}