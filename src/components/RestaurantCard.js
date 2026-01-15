import {RES_PIC_URL} from "../utils/constants"

const RestaurantCard = (props) =>{
    const{resData} = props;

    const {name, cuisines, rating, costForTwo, deliveryTime} = resData?.data;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0" }}>
            <img 
            className="res-logo"
            alt="res-logo" 
            src={RES_PIC_URL}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{rating}</h4>
            <h4>{costForTwo/100}</h4>
            <h4>{deliveryTime}minutes</h4>
        </div>
    )
}

export default RestaurantCard