import React from "react"
import  {RES_LOGO} from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {

  const [btnName, setBtnName] = useState("LogIn");

  const onlineStatus = useOnlineStatus()

    return (
      <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="logo-container">
          <img className="w-40" alt="resName" src= {RES_LOGO}/>
        </div>
  
        <div className="flex items-center">
          <ul className="flex p-5">
            <li className="px-5">Online Status: {onlineStatus? "🟢" : "🔴"} </li>
            {/* {nav items is a list so we are using uoordered list amd list tag} */}
            <li className="px-5">
              <Link to="/">Home</Link>
            </li>
            <li className="px-5">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-5">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-5">
              Cart
            </li>
            <li className="px-5">
              <Link to="/grocery">Grocery</Link>
            </li>
                              {/* toggle functionality of login and logout in button */}
            <button className = {`${btnName ==="LogIn"? className="bg-green-400 px-2 py-0.5 rounded-lg" : className="bg-red-500 px-2 py-0.5 rounded-lg"} `} onClick={()=>{ btnName==="LogIn" ? setBtnName("LogOut") : setBtnName("LogIn") }}>{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }

 export default Header;