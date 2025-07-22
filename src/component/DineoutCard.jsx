import { Star } from "lucide-react"
export default function DineoutCard({restData}){
    return(

        
       <div className="w-90 font-Quicksand h-auto shadow cursor-pointer rounded-2xl">
        {/* image rating and name */}
            <div className="w-90 h-50 object-cover relative">
                <a href={restData.cta.link} target="blank">
                    <img className=" rounded-t-2xl w-[100%] h-[100%]" src={`https://media-assets.swiggy.com/swiggy/image/upload/${restData?.info?.mediaFiles[0]?.url}`} alt={restData?.info?.name} />
                </a>
                <div className="bg-gradient-to-t from-black  w-90 h-12.5  absolute bottom-0 flex p-4 text-white justify-baseline items-center">
                    <div className="font-extrabold text-[20px] absolute left-3 w-60 top-1/2 -translate-y-1/2  truncate ">{restData?.info?.name}</div>
                    <div className="text-[16px] absolute right-3 font-extrabold top-1/2 -translate-y-1/2  flex items-center justify-baseline gap-1">
                    
                        <img src="https://i.postimg.cc/YSvSb4T7/Chat-GPT-Image-Jul-20-2025-09-38-21-PM.png" className="h-6.5 w-6.5  flex items-center justify-center"/>
                    
                    {restData?.info?.rating?.value}</div>
                    </div>
                </div>
        {/*All other Details*/}
            <div className="w-full h-auto rounded-2xl p-[12px]">
                <div className=" text-[14px] pt-1   flex justify-between text-[#02060c99] font-semibold">
                    <div >{restData.info.cuisines.map((val)=> (val +" "))}</div>
                    <div>{restData.info.costForTwo}</div>
                </div>

                <div className=" text-[14px] pt-1 flex justify-between text-[#02060c99] font-semibold">
                    <div className="w-55 truncate">{restData.info.locationInfo.formattedAddress}</div>
                    <div>{restData.info.locationInfo.distanceString}</div>
                </div>

                <div className=" w-full text-[14px] pt-3 gap-2 grid grid-cols-3 grid-rows-1 text-[#02060c99] font-semibold" >
                    {
                       restData?.info?.vendorOffer?.offerHighlights?.map((val) => (
                            <div key={val?.logoCtx?.logo} className="bg-[#F0F0F5] rounded-[6px]">
                                <p className="text-[13px] flex items-center">
                                    <img className="h-[14px] w-[14px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+val?.logoCtx?.logo}></img>
                                {val.logoCtx.text}</p>
                            </div>
                       ))
                    }
                </div>

                <div className="  text-[15px] px-2 py-2 rounded-[8px] mt-3 flex justify-between text-white font-bold bg-[#1ba672]">
                    <div className="flex gap-1 items-center justify-center">
                            <img className="h-6 w-6"  src="https://media-assets.swiggy.com/swiggy/image/upload/dineout/rx-card/OFFER.png"/>
                            <div>
                                {restData?.info?.offerInfoV3?.vendorOffer.title + " " + restData?.info?.offerInfoV3?.vendorOffer.subtitle }
                            </div>
                    </div>
                    <div>{restData?.info?.offerInfoV3?.vendorOffer?.subtext}</div>
                </div>

                <div className="text-[16px] px-2 py-2 rounded-[8px]  mt-3 font-semibold flex justify-between text-[#1ba672] bg-[#c8f9e5]">
                        <div>Up to 10% of with bank offers</div>
                </div>
          
            </div>
            </div>
    )
}