import Header from "./header"
import FoodOption from "./foodOption"
import Groceries from "./Groceries"
import Dineout from "./Dineout"
import Footer from "./Footer"

export default function Home() {
    
    return(
        <>
            <Header></Header>
            <FoodOption></FoodOption>
            <Groceries></Groceries>
            <Dineout></Dineout>
            <Footer></Footer>
        </>
    )
}