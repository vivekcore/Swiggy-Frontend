
import Cities from "./Cities";

export default function Footer(){

    return(
        <>
        <div className="font-Quicksand">
            <div className="mb-20 mt-10">
                <img className="h-full w-full object-cover" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"/>
            </div>
            <Cities online={"Order food Online in"} foodDelivery={"Cities with food delivery"}></Cities>
            <Cities online={"Order grocery delivery in"} foodDelivery={"Cities with grocery delivery"}></Cities>
            <div className="mt-20">
              <img className="h-full w-full" src="https://i.postimg.cc/vmTtQCGj/Screenshot-74.png" alt="footer img"></img>
            </div>
        </div>
        </>
    )
}