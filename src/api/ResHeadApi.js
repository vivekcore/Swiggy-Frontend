
export const ResHeadApi = async (id) => {
     
     try {
                
                const swiggyURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.9146&lng=75.8543&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
                const proxyURL = "https://cors-anywhere.herokuapp.com/"
                const response = await fetch(proxyURL+swiggyURL);
                const data = await response.json();
                const data1 = data.data
                return data1
            } catch (error) {
                console.log("error")
            }
}