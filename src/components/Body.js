import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"

  
const Body = () => {

  const ListofRestaurant = [];
    return(
        <div className="body">
            <div className="filter">
              <button className="filter-btn"
              onClick={()=>{}}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {
              ListofRestaurant.map((restaurant) => (
                <RestaurantCard key={restaurant.id} resData={restaurant}/>
              ))
            }
            </div>
        </div>
    )
}

export default Body