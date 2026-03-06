import{ LOGO_URL } from "../utils/constants"
import {useState} from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {

const [btnNameReact , setBtnNameReact] = useState("Login")

const onlineStatus = useOnlineStatus()

    return(
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
           <div className="logo-container">
              <img className="w-56" 
              src={LOGO_URL}></img>
           </div>
           <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">Online Status :{onlineStatus? "✅" : "🔴"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="contact">Contact Us</Link></li>
                <li className="px-4" ><Link to="grocery">Grocery</Link></li>
                <li className="px-4">Cart</li>
                <button className="login-button" onClick={() => {
                    btnNameReact === "Login" ? 
                    setBtnNameReact("Logout") : 
                    setBtnNameReact("Login")
                }}>{btnNameReact}</button>
            </ul>
           </div>
        </div>
    )
}

export default Header

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