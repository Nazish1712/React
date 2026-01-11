import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return(
        <div className="header">
           <div className="logo-container">
              <img className="logo" src="https://www.logodesign.net/logo-new/burger-with-fries-on-side-7182ld.png?nwm=1&nws=1&industry=burger-fries&txt_keyword=All"></img>
           </div>
           <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
           </div>
        </div>
    )
}

const RestaurantCard = (props) =>{
    const{resData} = props;

    const {name, cuisines, rating, costForTwo, deliveryTime} = resData;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0" }}>
            <img 
            className="res-logo"
            alt="res-logo" 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/5f2defb0-357e-4ca7-81e9-26aa29cf7a05_53744.JPG"></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{rating}</h4>
            <h4>{costForTwo/100}</h4>
            <h4>{deliveryTime}minutes</h4>
        </div>
    )
}

const resList = [
  {
    "id": "1",
    name: "Pizza Palace",
    "cuisines": ["Italian", "Pizza"],
    "costForTwo": 400,
    "deliveryTime": 30,
    "rating": 4.3
  },
  {
    "id": "2",
    "name": "Burger Hub",
    "cuisines": ["Burgers", "Fast Food"],
    "costForTwo": 300,
    "deliveryTime": 25,
    "rating": 4.1
  },
  {
    "id": "3",
    "name": "Spice Villa",
    "cuisines": ["Indian", "North Indian"],
    "costForTwo": 500,
    "deliveryTime": 35,
    "rating": 4.4
  },
  {
    "id": "4",
    "name": "Chinese Wok",
    "cuisines": ["Chinese", "Asian"],
    "costForTwo": 350,
    "deliveryTime": 28,
    "rating": 4.0
  },
  {
    "id": "5",
    "name": "South Spice",
    "cuisines": ["South Indian"],
    "costForTwo": 250,
    "deliveryTime": 20,
    "rating": 4.5
  },
  {
    "id": "6",
    "name": "Tandoori Treats",
    "cuisines": ["North Indian", "Tandoor"],
    "costForTwo": 600,
    "deliveryTime": 40,
    "rating": 4.2
  },
  {
    "id": "7",
    "name": "Roll Nation",
    "cuisines": ["Rolls", "Fast Food"],
    "costForTwo": 200,
    "deliveryTime": 18,
    "rating": 4.0
  },
  {
    "id": "8",
    "name": "Biryani House",
    "cuisines": ["Biryani", "Indian"],
    "costForTwo": 450,
    "deliveryTime": 32,
    "rating": 4.6
  },
  {
    "id": "9",
    "name": "Cafe Brew",
    "cuisines": ["Cafe", "Beverages"],
    "costForTwo": 300,
    "deliveryTime": 22,
    "rating": 4.1
  },
  {
    "id": "10",
    "name": "Healthy Bowl",
    "cuisines": ["Healthy", "Salads"],
    "costForTwo": 350,
    "deliveryTime": 26,
    "rating": 4.3
  },
  {
    "id": "11",
    "name": "Street Foods",
    "cuisines": ["Street Food", "Snacks"],
    "costForTwo": 150,
    "deliveryTime": 15,
    "rating": 4.2
  },
  {
    "id": "12",
    "name": "Mexican Fiesta",
    "cuisines": ["Mexican"],
    "costForTwo": 500,
    "deliveryTime": 34,
    "rating": 4.0
  },
  {
    "id": "13",
    "name": "Sushi World",
    "cuisines": ["Japanese", "Sushi"],
    "costForTwo": 700,
    "deliveryTime": 45,
    "rating": 4.4
  },
  {
    "id": "14",
    "name": "Dessert Corner",
    "cuisines": ["Desserts", "Bakery"],
    "costForTwo": 250,
    "deliveryTime": 20,
    "rating": 4.5
  },
  {
    "id": "15",
    "name": "Punjabi Dhaba",
    "cuisines": ["Punjabi", "North Indian"],
    "costForTwo": 550,
    "deliveryTime": 38,
    "rating": 4.3
  }
]



const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            {
              resList.map((restaurant) => (
                <RestaurantCard key={restaurant.id} resData={restaurant}/>
              ))
            }
            </div>
        </div>
    )
}
const AppLayout = () => {
    return(
        <div className="app">
          <Header/>
          <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)

// const Header = () => {
//   return(
//     <div className="header">
//       <div className="logo-container">
//         <img className="logo"src="https://www.logodesign.net/logo-new/burger-with-fries-on-side-7182ld.png?nwm=1&nws=1&industry=burger-fries&txt_keyword=All"></img>
//       </div>
//       <div className="nav-items">
//          <ul>
//           <li>HOME</li>
//           <li>ABOUT</li>
//           <li>CONTACT</li>
//           <li>CART</li>
//          </ul>
//       </div>
//     </div>
//   )
// }

// const resList = [
//   {
//     "id": "1",
//     "name": "Pizza Palace",
//     "cuisines": ["Italian", "Pizza"],
//     "costForTwo": 400,
//     "deliveryTime": 30,
//     "rating": 4.3
//   },
//   {
//     "id": "2",
//     "name": "Burger Hub",
//     "cuisines": ["Burgers", "Fast Food"],
//     "costForTwo": 300,
//     "deliveryTime": 25,
//     "rating": 4.1
//   },
//   {
//     "id": "3",
//     "name": "Spice Villa",
//     "cuisines": ["Indian", "North Indian"],
//     "costForTwo": 500,
//     "deliveryTime": 35,
//     "rating": 4.4
//   },
//   {
//     "id": "4",
//     "name": "Chinese Wok",
//     "cuisines": ["Chinese", "Asian"],
//     "costForTwo": 350,
//     "deliveryTime": 28,
//     "rating": 4.0
//   },
//   {
//     "id": "5",
//     "name": "South Spice",
//     "cuisines": ["South Indian"],
//     "costForTwo": 250,
//     "deliveryTime": 20,
//     "rating": 4.5
//   },
//   {
//     "id": "6",
//     "name": "Tandoori Treats",
//     "cuisines": ["North Indian", "Tandoor"],
//     "costForTwo": 600,
//     "deliveryTime": 40,
//     "rating": 4.2
//   },
//   {
//     "id": "7",
//     "name": "Roll Nation",
//     "cuisines": ["Rolls", "Fast Food"],
//     "costForTwo": 200,
//     "deliveryTime": 18,
//     "rating": 4.0
//   },
//   {
//     "id": "8",
//     "name": "Biryani House",
//     "cuisines": ["Biryani", "Indian"],
//     "costForTwo": 450,
//     "deliveryTime": 32,
//     "rating": 4.6
//   },
//   {
//     "id": "9",
//     "name": "Cafe Brew",
//     "cuisines": ["Cafe", "Beverages"],
//     "costForTwo": 300,
//     "deliveryTime": 22,
//     "rating": 4.1
//   },
//   {
//     "id": "10",
//     "name": "Healthy Bowl",
//     "cuisines": ["Healthy", "Salads"],
//     "costForTwo": 350,
//     "deliveryTime": 26,
//     "rating": 4.3
//   },
//   {
//     "id": "11",
//     "name": "Street Foods",
//     "cuisines": ["Street Food", "Snacks"],
//     "costForTwo": 150,
//     "deliveryTime": 15,
//     "rating": 4.2
//   },
//   {
//     "id": "12",
//     "name": "Mexican Fiesta",
//     "cuisines": ["Mexican"],
//     "costForTwo": 500,
//     "deliveryTime": 34,
//     "rating": 4.0
//   },
//   {
//     "id": "13",
//     "name": "Sushi World",
//     "cuisines": ["Japanese", "Sushi"],
//     "costForTwo": 700,
//     "deliveryTime": 45,
//     "rating": 4.4
//   },
//   {
//     "id": "14",
//     "name": "Dessert Corner",
//     "cuisines": ["Desserts", "Bakery"],
//     "costForTwo": 250,
//     "deliveryTime": 20,
//     "rating": 4.5
//   },
//   {
//     "id": "15",
//     "name": "Punjabi Dhaba",
//     "cuisines": ["Punjabi", "North Indian"],
//     "costForTwo": 550,
//     "deliveryTime": 38,
//     "rating": 4.3
//   }
// ]

// const RestaurantCard = (props) => {
// const {resData} = props
// const {name, cuisines, costForTwo, deliveryTime, rating} = resData;
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

// const Body = () => {
//  return(
//   <div className="body">
//     <div className="">Search</div>
//     <div className="res-container">
//        {resList.map((restaurant) => {
//         return(
//           <RestaurantCard key={restaurant.id} resData={restaurant}/>
//         )
//        })}
//     </div>
//   </div>
//  )
// }

// const AppLayout = () => {
//   return(
//     <div>
//       <Header/>
//       <Body/>
//     </div>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<AppLayout/>)


