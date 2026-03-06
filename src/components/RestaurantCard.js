const RestaurantCard = (props) =>{
    const{resData} = props;

    const {name, cloudinaryImageId,  cuisines, avgRating, costForTwo, sla:{deliveryTime}} = resData?.info;
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
            {<img 
            className="rounded-lg"
            alt="res-logo" 
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}></img>}
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}minutes</h4>
        </div>
    )
}

//Higher order component

const withVegLabel = (RestaurantCard) => {
    return() =>{
        
    }
}





export default RestaurantCard

// const RestaurantCard = (props) => {
// const {resData} = props
// const {name, cuisines, costForTwo, deliveryTime, rating} = resData?.data;
//   return(
//     <div className="res-card">
//       <img className ="res-logo"
//       alt="res-logo"
//       src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/5f2defb0-357e-4ca7-81e9-26aa29cf7a05_53744.JPG"></img>
//       <h3>{name}</h3>
//       <h4>{cuisines.join(", ")}</h4>
//       <h4>{costForTwo}</h4>
//       <h4>{deliveryTime}minutes</h4>
//       <h4>{rating}</h4>
//     </div>
//   )
// }