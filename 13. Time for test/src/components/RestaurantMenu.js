import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL_SWIGGY_IMAGES } from "../utils/constants";
import NoResults from "./NoResults";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";
import RestaurantCategoryAccordian from "./RestaurantCategoryAccordian";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, isLoading: isResInfoLoading } = useRestaurantMenu(resId);
  const [showCategoryIndex, setShowCategoryIndex] = useState(0);

  const { name, cloudinaryImageId, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards?.[0]?.card?.card?.info || {};

  const categories =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => {
        return (
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    ) || [];

  const handleShowCategory = (categoryIndex) => {
    setShowCategoryIndex(
      categoryIndex !== showCategoryIndex ? categoryIndex : -1
    );
  };

  return isResInfoLoading ? (
    <Shimmer />
  ) : resInfo ? (
    <div className="">
      <div className="flex justify-between w-6/12 m-auto my-6">
        <div>
          <h1 className="font-bold text-2xl mb-2">{name}</h1>
          <h3>Cuisines: {cuisines?.join(",")}</h3>
          <h3>Rating: {avgRating}</h3>
          <h3>{costForTwoMessage}</h3>
        </div>
        <div>
          <img
            className="w-32"
            src={`${CDN_URL_SWIGGY_IMAGES}/${cloudinaryImageId}`}
            alt="res-img"
          />
        </div>
      </div>

      <div>
        {categories?.map((category, categoryIndex) => {
          return (
            <RestaurantCategoryAccordian
              key={category?.card?.card?.title}
              categoryData={category?.card?.card}
              showItems={showCategoryIndex === categoryIndex}
              updateShowCategoryIndex={() => handleShowCategory(categoryIndex)}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <NoResults message="No resutls found" />
  );
};

export default RestaurantMenu;
