
export const Restrauntdata = async () => {
     try{
            
            const swiggyURL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.9146&lng=75.8543&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
            const proxyURL = "https://cors-anywhere.herokuapp.com/"
            const response = await fetch(proxyURL+swiggyURL);
            const data = await response.json();
            const RestrauntData = data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
            return RestrauntData;
        } catch (error) {
                console.log("error")
            }
}

