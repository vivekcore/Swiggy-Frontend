import { useState, useRef } from "react"
import MenuData from "./menudata"
import { ChevronDown, ChevronUp , ArrowLeft , ArrowRight} from "lucide-react";


export default function Menucard({menu,foodselected}){

    const[isOpen,setIsOpen] = useState(true);
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
   
   
     if(!isOpen){
        return(
            <div className="w-[70%] container  mx-auto  font-Quicksand ">
                  <div className="w-full   flex justify-between ">
                 <p className="text-2xl font-bold p-5">{menu?.title}</p>
                 <button className="w-15 font-bold text-2xl text-gray-950 cursor-pointer" onClick={()=>setIsOpen(true)}>{isOpen? <ChevronUp/>:<ChevronDown/>}</button>
                 
            </div>
               <div className="h-4  opacity-70 bg-gray-200 w-full"></div>
            </div>
        )
     }
   
     if(foodselected === 'veg'){
        return(
             <div className="w-[70%] container  mx-auto font-Quicksand ">
          
           <div className="w-full   flex justify-between ">
            {
                menu.title !== 'Top Picks' ? (
                    <>
                        <p className="text-2xl font-bold p-5">{menu?.title}</p>
                        <button className="w-15 font-bold text-2xl text-gray-950 cursor-pointer" onClick={()=>setIsOpen(false)}>{isOpen ? <ChevronUp/> : <ChevronDown/>}</button>
                    </>
                ) :
                menu.title === 'Top Picks' && (
                    <div className="flex flex-col scroll-invi w-full"> 
                        <div className="relative w-full flex items-center">
                            <p className="text-2xl font-bold  p-5">{menu?.title}</p>
                            <button onClick={() => scroll('left')} className="absolute top-9 right-15 -translate-y-1/2 z-10 bg-gray-200 shadow p-2 rounded-full cursor-pointer"><ArrowLeft /></button>
                            <button onClick={() => scroll('right')} className="absolute top-9 right-0 -translate-y-1/2 z-10 bg-gray-200 shadow  p-2 rounded-full cursor-pointer"><ArrowRight /></button>
                        </div>
                        <div className="my-5 flex gap-5 overflow-x-auto scroll-smooth scroll-invi w-full" ref={scrollRef}>
                            {
                               menu.carousel.filter(val => val?.dish?.info?.itemAttribute?.vegClassifier === 'VEG' ).map(item => <MenuData key={item?.bannerId} item={item}></MenuData>)
                            }
                        </div>
                    </div>
                )
            }
            </div>
            <div className=" flex flex-wrap p-5  ">
                {
                    menu?.itemCards?.filter((food)=> 'isVeg' in food.card.info).map(item => <MenuData key={item?.card?.info?.id} item={item}></MenuData>)
                }
            </div>
            <div className="h-4  opacity-70 bg-gray-200 w-full"></div>
        </div>
        )
     }
     if(foodselected === 'nonveg'){
        return(
             <div className="w-[70%] container  mx-auto font-Quicksand  ">
          
           <div className="w-full   flex justify-between ">
                 {
                menu.title !== 'Top Picks' ? (
                    <>
                        <p className="text-2xl font-bold p-5">{menu?.title}</p>
                        <button className="w-15 font-bold text-2xl text-gray-950 cursor-pointer" onClick={()=>setIsOpen(false)}>{isOpen ? <ChevronUp/> : <ChevronDown/>}</button>
                    </>
                ) :
                menu.title === 'Top Picks' && (
                    <div className="flex flex-col scroll-invi w-full"> 
                        <div className="relative w-full flex items-center">
                            <p className="text-2xl font-bold  p-5">{menu?.title}</p>
                            <button onClick={() => scroll('left')} className="absolute top-9 right-15 -translate-y-1/2 z-10 bg-gray-200 shadow p-2 rounded-full cursor-pointer"><ArrowLeft /></button>
                            <button onClick={() => scroll('right')} className="absolute top-9 right-0 -translate-y-1/2 z-10 bg-gray-200 shadow  p-2 rounded-full cursor-pointer"><ArrowRight /></button>
                        </div>
                        <div className="my-5 flex gap-5 overflow-x-auto scroll-smooth w-full srcoll-invi" ref={scrollRef}>
                            {
                                menu.carousel.filter(val => val?.dish?.info?.itemAttribute?.vegClassifier === 'NONVEG' ).map(item => <MenuData key={item?.bannerId} item={item}></MenuData>)
                            }
                        </div>
                    </div>
                )
            }
            </div>
            <div className=" flex flex-wrap p-5  ">
                {
                    menu?.itemCards?.filter((food)=> !('isVeg' in food.card.info)).map(item => <MenuData key={item?.card?.info?.id} item={item}></MenuData>)
                }
            </div>
            <div className="h-4  opacity-70 bg-gray-200 w-full"></div>
        </div>
        )
     }
     return(
        <div className="w-[70%] container  mx-auto  font-Quicksand ">
          
           <div className="w-full   flex justify-between ">
                {
                menu.title !== 'Top Picks' ? (
                    <>
                        <p className="text-2xl font-bold p-5">{menu?.title}</p>
                        <button className="w-15 font-bold text-2xl text-gray-950 cursor-pointer" onClick={()=>setIsOpen(false)}>{isOpen ? <ChevronUp/> : <ChevronDown/>}</button>
                    </>
                ) :
                menu.title === 'Top Picks' && (
                    <div className="flex flex-col w-full"> 
                        <div className="relative w-full flex items-center">
                            <p className="text-2xl font-bold  p-5">{menu?.title}</p>
                            <button onClick={() => scroll('left')} className="absolute top-9 right-15 -translate-y-1/2 z-10 bg-gray-200 shadow p-2 rounded-full cursor-pointer"><ArrowLeft /></button>
                            <button onClick={() => scroll('right')} className="absolute top-9 right-0 -translate-y-1/2 z-10 bg-gray-200 shadow  p-2 rounded-full cursor-pointer"><ArrowRight /></button>
                        </div>
                        <div className="my-5 flex gap-5 overflow-x-auto scroll-invi scroll-smooth w-full" ref={scrollRef}>
                            {
                                menu?.carousel?.map(item => <MenuData key={item?.bannerId} item={item}></MenuData>)
                            }
                        </div>
                    </div>
                )
            }
            </div>
            <div className=" flex flex-wrap p-5 w-full ">
                {
                    menu?.itemCards?.map(item => <MenuData key={item?.card?.info?.id} item={item}></MenuData>)
                }
            </div>
            <div className="h-4  opacity-70 bg-gray-200 w-full"></div>
        </div>
    )
}

