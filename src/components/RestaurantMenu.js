import { useEffect } from "react"

const RestaurantMenu  = () => {

    useEffect(()=>{
       fetchMenu()
    },[])

    const fetchMenu = async () =>{
        const data = await fetch("https://namastedev.com/api/v1/listRestaurantMenu/123456")
        const json = await data.json()
    }
   return(
    <div className="menu">
        <h1>Name of the Restaurant</h1>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burgers</li>
            <li>Diet Coke</li>
        </ul>
    </div>
   )
}

export default RestaurantMenu