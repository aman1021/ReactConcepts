import CategoryItemList from "./CategoryItemList";

const ResCategoryAccordion = ({ category, showCategoryList, setExpandAccordion }) => {


  const handleClick = () => {
    setExpandAccordion();
  }

  // console.log(category);
  return (
    <div>
      <div className="mx-auto my-6 w-6/12 shadow-lg bg-gray-100 rounded-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick} >
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

export default ResCategoryAccordion; // This is a controlled component as it being controlled by the restaurantMenu(Parent component) component.
