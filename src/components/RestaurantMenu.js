import { useState , useEffect } from "react"
import Shimmer from "./Shimer"
const RestaurantMenu  = () => {
    const[resInfo , setResInfo]= useState(null)
    
    useEffect(()=>{
       fetchMenu()
    },[])

    const fetchMenu = async () =>{
        const data = await fetch("https://corsproxy.io/?https://namastedev.com/api/v1/listRestaurantMenu/123456")
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
             return <li key={item.card.info.id}>{item.card.info.name}</li>
            })}
        </ul>
    </div>
   )
}

export default RestaurantMenu