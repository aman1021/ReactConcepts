import  {RES_CARD_IMG} from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props
    const {res, cuisine, deliveryTime, rating} = resData;
    return (
      <div className="res-card">
        <img className="resimg" alt="res-coffee" src={RES_CARD_IMG}/>
        <h3>{res}</h3>
        <h4> {cuisine.join(", ")} </h4>
        <h4> {deliveryTime} minutes</h4>
        <h4> {rating} stars</h4>
      </div>
    )
  }

  export default RestaurantCard;