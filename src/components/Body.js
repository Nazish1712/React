import RestaurantCard , {withVegLabel} from "./RestaurantCard"
import {useState, useEffect} from "react"
import Shimmer from "./Shimer"
import { RESTAURANT_LIST_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
  
const Body = () => {
  
  const [ListOfRestaurants , setListOfRestaurants] = useState([])
  const [filteredRestaurant,setFilteredRestaurant] = useState([])
    
  const [searchText, setSearchText] = useState("")

  const RestaurantCardVeg = withVegLabel(RestaurantCard) 

  console.log(ListOfRestaurants)
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async() => {
    const data = await fetch(RESTAURANT_LIST_URL);
    
    const json = await data.json()
    
    setListOfRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  //conditional rendering
  // if(ListOfRestaurants.length === 0){
  //   return <Shimmer/>}

const onlineStatus = useOnlineStatus()

if(onlineStatus === false) 
  return (
       <h1>Looks like you are offline! Please check your internet connection</h1>
  )  

  return ListOfRestaurants.length === 0 ? (<Shimmer/>) : (
        <div className="body">
            <div className="flex">
              <div className="m-4 p-4">
                <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                  setSearchText(e.target.value)
                }}/>
                <button
                className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                onClick={()=>{
                  const filteredRestaurant = ListOfRestaurants.filter((res)=>{return(res.info.name.toLowerCase().includes(searchText.toLowerCase()))})
                  setFilteredRestaurant(filteredRestaurant)
                }}
                >Search</button>
              </div>
              <div className="m-4 p-4 flex items-center">
              <button className="px-4 py-2 bg-gray-100 rounded-lg"
              onClick={()=>{
                const filteredList = ListOfRestaurants.filter(
                  (restaurant) => {
                    return(
                      restaurant.info.avgRating > 4.5
                    )
                    }
                 )
                 setFilteredRestaurant(filteredList)
              }
             }>Top Rated Restaurants</button>
              </div>
            </div>
            <div className="flex flex-wrap">
            {
            filteredRestaurant.map((restaurant) => {
              return(
               <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}
               >
                {restaurant.info.veg ? 
                (<RestaurantCardVeg resData={restaurant}/> )
                  :(<RestaurantCard  resData={restaurant}/>)}
                  </Link> 
              )}
            )
            }
            </div>
        </div>
    )
}

export default Body



