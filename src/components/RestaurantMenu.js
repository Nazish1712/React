import { useState , useEffect } from "react"
import Shimmer from "./Shimer"
import {useParams} from "react-router-dom"
import { MENU_API_URL } from "../utils/constants"
import {MENU_API_URL} from "../utils/constants"
const RestaurantMenu  = () => {
    const[resInfo , setResInfo]= useState(null)
    
    const {resId} = useParams()

    useEffect(()=>{
       fetchMenu()
    },[])

    const fetchMenu = async () =>{
        const data = await fetch(MENU_API_URL+resId)
        const json = await data.json()

        setResInfo(json.data)
    }
     
     if (resInfo === null) {
        return <Shimmer/>}

    const {name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ;

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