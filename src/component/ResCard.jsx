import { Link } from "react-router";

export default function ResCard({resinfo}){

    return(
        <Link to={"/city/ludhiana/"+resinfo?.info?.id}>
        <div className="font-Quicksand w-68.5 h-75 rounded-2xl hover:scale-[0.95] transition duration-100 mr-2 mb-2" >
            <div className="  w-68.5 h-45.5 object-cover relative">
            <img className="object-cover rounded-t-2xl rounded-b-2xl w-[100%] h-[100%]"  src={"https://media-assets.swiggy.com/swiggy/image/upload/"+resinfo?.info?.cloudinaryImageId} />
            <div  className="bg-gradient-to-t rounded-b-2xl from-black w-68.5 h-12.5  absolute bottom-0 flex p-4 text-white justify-baseline items-center">
            {
                resinfo?.info?.aggregatedDiscountInfoV3?.header && (
                     <p className="font-bold text-[20px] flex items-center w-65.5 h-6">{(resinfo?.info?.aggregatedDiscountInfoV3?.header)+(resinfo?.info?.aggregatedDiscountInfoV3?.subHeader)}</p>
                )
            }
             </div>
             <div className="p-2.5">
                <div className="font-bold text-[18px] truncate pr-8">{ resinfo?.info?.name }</div>
                <div className="font-semibold text-[18px] flex items-center">
                    <img className="h-6.5 w-6.5" src="https://i.postimg.cc/bNmf72T7/star-icon-symbol-sign-vector-removebg-preview.png"/>
                  <p>{(resinfo?.info?.avgRatingString)+"•"}{resinfo?.info?.sla?.slaString}</p> 
                </div>
                <div className="font-semibold truncate opacity-60 break-normal pr-8" >{resinfo?.info?.cuisines.join(", ")}</div>
                <div className="font-semibold truncate opacity-60 break-normal pr-8">{resinfo?.info?.locality}</div>
             </div>
            </div>
        </div>
        </Link>
    )
}