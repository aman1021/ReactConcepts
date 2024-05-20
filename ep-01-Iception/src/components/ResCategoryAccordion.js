import CategoryItemList from "./CategoryItemList";

const ResCategoryAccordion = ({ category }) => {
  console.log(category);
  return (
    <div>
      <div className="mx-auto my-4 w-6/12 shadow-lg bg-gray-200 rounded-lg p-4 ">
        <div className="flex justify-between">
          <span className="font-semibold">
            {category.title}({category.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* accordion body that is menu items for particular category title */}
        <CategoryItemList itemCards={category.itemCards} />
      </div>
    </div>
  );
};

export default ResCategoryAccordion;
