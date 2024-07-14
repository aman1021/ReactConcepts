import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategoryAccordion from "./ResCategoryAccordion";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null)

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
      {categories.map((category) => (
        <ResCategoryAccordion  category={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
