import  {RES_CARD_IMG} from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props
    const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId} = resData;
    return (
      <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200 rounded-lg">
        <img className="rounded-lg" alt="res-coffee" src={RES_CARD_IMG + cloudinaryImageId}/>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4> <h4 className="font-semibold">🍽️Cuisines-</h4> {cuisines.join(", ")} </h4>
        <h4 className="font-semibold"> ⌚{sla.deliveryTime} minutes</h4>
        <h4 className="font-semibold"> 🌟{avgRating} stars</h4>
        <h4 className="font-semibold"> 💸{costForTwo} </h4>
      </div>
    )
  }

  //Higher order componenets.....

  export const withOpenLabel = (RestaurantCard) => {
    return  (props) => {
      return (
        <div>
          <label className="absolute bg-green-500 text-white px-2 py-0.5 rounded-lg">Open</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }


  export default RestaurantCard;