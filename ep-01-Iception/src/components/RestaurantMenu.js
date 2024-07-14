import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategoryAccordion from "./ResCategoryAccordion";
import { useState } from "react";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null)

  const [expandAccordion, setExpandAccordion] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // console.log(resId)

  // useEffect(() => {
  //     fetchmenu();
  // },[])

  // const fetchmenu = async() => {
  //     const data = await fetch(MENU_API_URL + resId)
  //     const json = await data.json();

  //     console.log(json);
  //     setResInfo(json.data);
  // }

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRatingString, costForTwoMessage, totalRatings } =
    resInfo?.cards?.[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-semibold text-lg">
        🌟{avgRatingString} . {cuisines.join(" , ")} - {costForTwoMessage}
      </p>
      {/* {category accordion} */}
      {categories.map((category, index) => (
        <ResCategoryAccordion
          key={category?.card?.card?.title}
          showCategoryList={index === expandAccordion ? true : false} /*to control the accordion of res. category so that when one is opened others must be closed automatically.
          Now this restaurant mnu component is controlling the restaurant category accordion component.*/
          category={category?.card?.card}
          setExpandAccordion = {()=> setExpandAccordion(index)} 
        />
      ))}
    </div>
  );
};

export default RestaurantMenu; //this is a parent component to resCategoryAccordion component.
