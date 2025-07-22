
export default function GroceriesCard({GData}){
    return(
        <div className="font-Quicksand">
            <a target="blank" href={GData.action.link}>
            <div className="flex flex-col">
            <img className="min-w-40 min-h-auto" src={`https://media-assets.swiggy.com/swiggy/image/upload/${GData?.imageId}`}></img>
            <p className="font-bold opacity-70 text-center">{GData.action.text}</p>
            </div>
            </a>
        </div>
    )
}

