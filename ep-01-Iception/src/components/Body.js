import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from 'react'
import Shimmer from "./Shimmer";

const Body = () => {
//It gives us an array which we have destructured on the fly another way it can be represented is
// const listRes = arr[0]
// const setListRes = arr[1]
  const [listRes, setListRes] = useState([]);

  useEffect(()=> {
    fetchData()
  }, []); 

  const fetchData = async() => {
    const datas = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await datas.json();
    // console.log(json)
    //optional chaining
    setListRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) //updating the list of restaurants.
  }

  //conditional rendering
  if(listRes.length === 0){
    return <Shimmer/>
  }
  
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredList  =
            listRes.filter((res) => 
            res.info.avgRating> 4
            )
          setListRes(filteredList)
        }}>
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listRes.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant?.info} />
        ))}
        
      </div>
    </div>
  );
};

export default Body;
