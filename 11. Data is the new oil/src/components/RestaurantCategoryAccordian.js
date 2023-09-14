import { useState } from "react";
import RestaurantCategoryItem from "./RestaurantCategoryItem";

const RestaurantCategoryAccordian = (props) => {
  const { categoryData } = props;
  const [showItems, setShowItems] = useState(false);
  return (
    <div className="w-6/12 m-auto p-4 my-4 border border-gray-200 shadow-md">
      <div className="flex justify-between">
        <span className="font-semibold">
          {categoryData?.title} {`(${categoryData?.itemCards?.length})`}
        </span>
        <button onClick={() => setShowItems(!showItems)}>
          {showItems ? "⬆" : "⬇"}
        </button>
      </div>
      {showItems && categoryData?.itemCards?.length && (
        <div className="border-b-4 mt-4 border-gray-600"></div>
      )}
      {showItems &&
        categoryData?.itemCards?.map((item) => {
          return <RestaurantCategoryItem itemData={item?.card?.info} />;
        })}
    </div>
  );
};

export default RestaurantCategoryAccordian;
