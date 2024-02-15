import React from "react"
import  {RES_LOGO} from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
const Header = () => {

  const [btnName, setBtnName] = useState("LogIn");


    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" alt="resName" src= {RES_LOGO}/>
        </div>
  
        <div className="nav-items">
          <ul>
            {/* {nav items is a list so we are using uoordered list amd list tag} */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              Cart
            </li>
                              {/* toggle functionality of login and logout in button */}
            <button className="Log-btn" onClick={()=>{ btnName==="LogIn" ? setBtnName("LogOut") : setBtnName("LogIn") }}>{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }

 export default Header;