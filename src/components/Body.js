import RestaurantCard from "./RestaurantCard"
import {useState, useEffect} from "react"
import Shimmer from "./Shimer"
  
const Body = () => {
  
  const [ListOfRestaurants , setListOfRestaurants] = useState([])
    
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async() => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    
    const json = await data.json()
    
    setListOfRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  //conditional rendering
  if(ListOfRestaurants.length === 0){
    return <Shimmer/>}

  return(
        <div className="body">
            <div className="filter">
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
            ListOfRestaurants.map((restaurant) => {
              return(
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
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

