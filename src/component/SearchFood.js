import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { SearchIcon } from "lucide-react";
import Menucard from "./menucard";

export default function SearchFood() {
  const { id } = useParams();
  const [ResData, setResdata] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [val, setVal] = useState('');

  useEffect(() => {
    async function fetchdata() {
      try {
        const proxyServer = "https://cors-anywhere.herokuapp.com/";
        const swiggyApi = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.9146&lng=75.8543&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
        const response = await fetch(proxyServer + swiggyApi);
        const data = await response.json();

        const tempdata = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const filterData = tempdata.filter((items) => 'title' in items.card.card);

        setResdata(filterData);         
        setOriginalData(filterData);    
      } catch (error) {
        console.log("error", error);    
      }
    }

    fetchdata();
  }, []); 

  const Serachfilter = (event) => {
    const newval = event.target.value.trim();
    setVal(newval);

    const data = newval === ""
      ? originalData                                
      : originalData.filter((val) =>
          val.card.card.title.toLowerCase().includes(newval.toLowerCase())
        );
    setResdata(data);                               
  };

  return (
    <div className="custom-scroll font-Quicksand mt-30">
      <div className="relative my-10 w-[80%] mx-auto container">
        <SearchIcon className="absolute top-3 right-4 text-gray-600" />
        <input
          className="p-3 text-[18px] w-full text-center border-0 bg-gray-100 rounded-2xl tracking-wide text-gray-500"
          placeholder="Search for Dishes"
          value={val}
          onChange={Serachfilter}
        />
      </div>

      <div className="container mx-auto w-[100vw]">
        <div className="container mx-auto w-full">
          {
            ResData.map((menu) =>
              (menu.card.card.title !== 'Top Picks') &&
              <Menucard
                key={menu.card.card.title}
                menu={menu.card.card}
                foodselected={null}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}
