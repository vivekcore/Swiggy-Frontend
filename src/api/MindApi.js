export const Mind = async () => {
     try{
            
            const swiggyURL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.9146&lng=75.8543&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
            const proxyURL = "https://cors-anywhere.herokuapp.com/"
            const response = await fetch(proxyURL+swiggyURL);
            const data = await response.json();
            const RestrauntHead = data.data.cards[0].card.card.imageGridCards.info;
            return RestrauntHead;
        } catch (error) {
                console.log("error")
            }
}// https://cors-proxy-vercel-b86w9uhuu-vivekcores-projects.vercel.app/api/proxy?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.9146&lng=75.8543&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING