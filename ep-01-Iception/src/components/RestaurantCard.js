import  {RES_CARD_IMG} from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props
    console.log(resData)
    const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId} = resData;
    return (
      <div className="res-card">
        <img className="resimg" alt="res-coffee" src={RES_CARD_IMG + cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4> {cuisines.join(", ")} </h4>
        <h4> {sla.deliveryTime} minutes</h4>
        <h4> {avgRating} stars</h4>
        <h4> {costForTwo} </h4>
      </div>
    )
  }

  export default RestaurantCard;