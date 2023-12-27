import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/constants";
import {useState} from 'react'

const Body = () => {
//It gives us an array which we have destructured on the fly another way it can be represented is
// const listRes = arr[0]
// const setListRes = arr[1]
  const [listRes, setListRes] = useState(resList) 

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredList  =
            listRes.filter((res) => 
            res.rating> 4
            )
          setListRes(filteredList)
        }}>
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listRes.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
