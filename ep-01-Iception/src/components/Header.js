import React from "react"
import  {RES_LOGO} from "../utils/constants"

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" alt="resName" src= {RES_LOGO}/>
        </div>
  
        <div className="nav-items">
          <ul>
            {/* {nav items is a list so we are using uoordered list amd list tag} */}
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    )
  }

 export default Header;