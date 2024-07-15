import RestaurantCard, {withOpenLabel} from "./RestaurantCard";
import {useState, useEffect, useContext} from 'react'
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
//It gives us an array which we have destructured on the fly another way it can be represented is
// const listRes = arr[0]
// const setListRes = arr[1]
  const [listRes, setListRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([])

  const [searchText, setSearchText] = useState("")

  //when ever a state variable is updated, react triggers a reconciliation cycle(re-renders the component)
  
  // console.log("list", listRes)

  const RestaurantCardOpen = withOpenLabel(RestaurantCard);

  useEffect(()=> {
    fetchData()
  }, []); 

  const fetchData = async() => {
    const datas = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await datas.json();
    //optional chaining
    setListRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) //updating the list of restaurants.
    setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  //conditional rendering
  // if(listRes.length === 0){
  //   return <Shimmer/>
  // }
  //conditional rendering using tertianary operator.

 const onlineStatus = useOnlineStatus()

 if(onlineStatus === false){
  return <h1>Looks like you are offline!!! Please check your internet connection</h1>
 }

 const {loggedInUser ,setUserName} = useContext(UserContext)


  return listRes.length === 0 ? (<Shimmer/>) : (
    <div className="body">
      <div className="flex justify-between items-center">
        <div className=" p-4 m-4">
          <input type="text" placeholder="Search for restaurant." className="border border-solid border-black p-1 rounded-md" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }}/>

          <button className="mx-4 bg-green-300 px-4 py-2 hover:bg-green-500 rounded-lg" onClick={()=> {
            //filter the res cards and update the ui.
            const filteredRes = listRes.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRes(filteredRes);
          }}>search</button>

        </div>

        <div className="p-4 m-4 flex items-center">
        <button className=" px-4 py-2 bg-red-200 hover:bg-red-400 rounded-lg" onClick={() => {
          const filteredList  =
          listRes.filter((res) => 
            res?.info?.avgRating > 4
            )
            setFilteredRes(filteredList)
        }}>
          Top rated Restaurant
        </button>
        </div>

        <div >
          <label>User name:</label>
          <input value={loggedInUser} onChange={(e)=> setUserName(e.target.value)} className="p-2 border border-black"/>
        </div>
        
      </div>
      <div className="flex flex-wrap justify-between">
        {filteredRes.map((restaurant) => (
         <Link key={restaurant?.info?.id} to={"/restaurant/" + restaurant?.info?.id}> {restaurant?.info?.isOpen ? <RestaurantCardOpen resData={restaurant?.info}/> : <RestaurantCard  resData={restaurant?.info} />} </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
