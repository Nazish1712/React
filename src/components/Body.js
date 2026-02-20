import RestaurantCard from "./RestaurantCard"
import {useState, useEffect} from "react"
import Shimmer from "./Shimer"
import { RESTAURANT_LIST_URL } from "../utils/constants"
import { Link } from "react-router-dom"
  
const Body = () => {
  
  const [ListOfRestaurants , setListOfRestaurants] = useState([])
  const [filteredRestaurant,setFilteredRestaurant] = useState([])
    
  const [searchText, setSearchText] = useState("")
  
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

  return ListOfRestaurants.length === 0 ? (<Shimmer/>) : (
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e) => {
                  setSearchText(e.target.value)
                }}/>
                <button
                onClick={()=>{
                  const filteredRestaurant = ListOfRestaurants.filter((res)=>{return(res.info.name.toLowerCase().includes(searchText.toLowerCase()))})
                  setFilteredRestaurant(filteredRestaurant)
                }}
                >Search</button>
              </div>
              <button className="filter-btn"
              onClick={()=>{
                const filteredList = ListOfRestaurants.filter(
                  (restaurant) => {
                    return(
                      restaurant.info.avgRating > 4
                    )
                    }
                 )
                 setListOfRestaurants(filteredList)
              }
             }>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {
            filteredRestaurant.map((restaurant) => {
              return(
               <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link> 
              )}
            )
            }
            </div>
        </div>
    )
}

export default Body

// const Body = () => {
// const[ListOfRestaurants , setListofRestaurants] = useState(resList)

//  return(
//   <div className="body">
//     <div className="filter">
//     <button className="filter-btn"
//     onClick={()=> {
//       const filteredList = ListOfRestaurants.filter((restaurants) => {return(restaurants.data.avgRatings > 4 )})
//       setListofRestaurants(filteredList)}
//     }
//     >Top Rated Restaurant </button>
//     </div>
//     <div className="res-container">
//        {ListOfRestaurants.map((restaurant) => {
//         return(
//           <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
//         )
//        })}
//     </div>
//   </div>
//  )
// }

