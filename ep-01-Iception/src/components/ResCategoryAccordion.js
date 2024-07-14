import CategoryItemList from "./CategoryItemList";
import { useState } from "react";

const ResCategoryAccordion = ({ category }) => {

  const [showCategoryList, setShowCategoryList] = useState(false)

  const handleClick = () => {
    setShowCategoryList(!showCategoryList)
  }
  console.log(category);
  return (
    <div>
      <div className="mx-auto my-6 w-6/12 shadow-lg bg-gray-100 rounded-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-semibold text-lg">
            {category.title}({category.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* accordion body that is menu items for particular category title of a pericular restaurant.. */}
        {showCategoryList && <CategoryItemList itemCards={category.itemCards} />}
      </div>
    </div>
  );
};

export default ResCategoryAccordion;
