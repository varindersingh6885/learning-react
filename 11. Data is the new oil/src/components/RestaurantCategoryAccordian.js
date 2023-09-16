import RestaurantCategoryItem from "./RestaurantCategoryItem";

const RestaurantCategoryAccordian = (props) => {
  const { categoryData, showItems, updateShowCategoryIndex } = props;
  return (
    <div className="w-6/12 m-auto my-4 border border-gray-200 shadow-md">
      <div
        className="flex justify-between cursor-pointer p-4"
        onClick={updateShowCategoryIndex}
      >
        <span className="font-semibold">
          {categoryData?.title} {`(${categoryData?.itemCards?.length})`}
        </span>
        <button>{showItems ? "⬆" : "⬇"}</button>
      </div>
      {showItems && categoryData?.itemCards?.length && (
        <div className="border-b-4 mx-2 border-gray-600"></div>
      )}
      {showItems &&
        categoryData?.itemCards?.map((item) => {
          return (
            <RestaurantCategoryItem
              key={item?.card?.info?.id}
              itemData={item?.card?.info}
            />
          );
        })}
    </div>
  );
};

export default RestaurantCategoryAccordian;
