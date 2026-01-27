import{ LOGO_URL } from "../utils/constants"

const Header = () => {
    return(
        <div className="header">
           <div className="logo-container">
              <img className="logo" 
              src={LOGO_URL}></img>
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