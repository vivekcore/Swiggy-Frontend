
export default function InMindCard({item}){

      return(
        <div className="font-Quicksand">
            <a target="blank" href={item?.action?.link}>
            <div className="flex flex-col">
            <img className="min-w-42 min-h-auto" src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.imageId}`}></img>
           
            </div>
            </a>
        </div>
    )
}