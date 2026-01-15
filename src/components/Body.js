import RestaurantCard from "./RestaurantCard"
import {useState} from "react"
import resList from "../utils/mockData"
  
const Body = () => {
  
  const [ListofRestaurants , setListofRestaurants] = useState(resList)
    
  return(
        <div className="body">
            <div className="filter">
              <button className="filter-btn"
              onClick={()=>{
                const filteredList = ListofRestaurants.filter(
                  (restaurant) => {
                    return(
                      restaurant.data.avgRatings > 4
                    )
                    }
                 )
                 setListofRestaurants(filteredList)
              }
             }>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {
            ListofRestaurants.map((restaurant) => {
              return(
                <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
              )}
            )
            }
            </div>
        </div>
    )
}

export default Body