import { RES_CARD_IMG } from "../utils/constants";

const CategoryItemList = ({ itemCards }) => {
  console.log(itemCards);
  return (
    <div>
      {itemCards.map((item) => (
        <div
          key={item.card?.info?.id}
          className="p-2 m-2 border-gray-500 border-b-2 text-left"
        >
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-xl">
                {" "}
                {item?.card?.info?.name}
              </span>
              <span className="font-normal text-lg">
                {" "}
                ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}{" "}
              </span>
            </div>
            <div className="flex flex-col items-center relative">
              <img
                src={RES_CARD_IMG + item?.card?.info?.imageId}
                className="w-20 h-20 rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-5" >
                <button className="bg-white shadow-lg text-green-600 hover:bg-green-600 hover:text-white border-gray-300 border-b-2 rounded-lg font-semibold w-16 p-1">
                  Add +
                </button>
              </div>
            </div>
          </div>
          <p className="text-[#40464c] text-sm w-9/12">
            {" "}
            {item?.card?.info?.description}{" "}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CategoryItemList;
