export default function Foodcard({foood}){

    return(
       <>
            <a href={foood?.action?.link} target="blank">
                <div ><img className=" w-42 h-51 mr-[40px] object-cover " src={`https://media-assets.swiggy.com/swiggy/image/upload/${foood?.imageId}`}/></div>
            </a>
       </>
    )
}