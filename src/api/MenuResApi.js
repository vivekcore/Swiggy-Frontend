
export const MenuResApi = async (id) => {
    
    try {
                const swiggyURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.9146&lng=75.8543&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
                const proxyURL = "https://cors-anywhere.herokuapp.com/"
                const response = await fetch(proxyURL+swiggyURL);
                const data = await response.json();
                const tempdata = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                const filterData = tempdata.filter((items) => 'title' in items.card.card);
                return filterData;
            } catch (error) {
                console.log("error")
            }
}