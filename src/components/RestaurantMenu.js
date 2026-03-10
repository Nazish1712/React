import useRestaurantMenu from "../utils/useRestaurantMenu"
import Shimmer from "./Shimer"
import {useParams} from "react-router-dom"


const RestaurantMenu  = () => {
    
    const {resId} = useParams()

    const resInfo = useRestaurantMenu(resId)

     
     if (resInfo === null) {
        return <Shimmer/>}

    const {name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ;
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
     return (
        <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(" , ")}</h3>
        <h3>{costForTwoMessage}</h3>
        <ul>
            {itemCards.map((item) => {
             return <li key={item.card.info.id}>{item.card.info.name} - {"Rs."} {item.card.info.price/100}</li>
            })}
        </ul>
    </div>
   )
}

export default RestaurantMenu