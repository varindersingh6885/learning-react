import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL_SWIGGY_IMAGES } from "../utils/constants";
import NoResults from "./NoResults";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, isLoading: isResInfoLoading } = useRestaurantMenu(resId);

  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwoMessage,
    avgRating,
    sla,
  } = resInfo?.cards?.[0]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || [];

  return isResInfoLoading ? (
    <Shimmer />
  ) : resInfo ? (
    <div className="res-menu">
      <img
        className="res-img"
        src={`${CDN_URL_SWIGGY_IMAGES}/${cloudinaryImageId}`}
        alt="res-img"
      />
      <h1>{name}</h1>
      <h3>Cuisines: {cuisines?.join(",")}</h3>
      <h3>Rating: {avgRating}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>ETA: {sla.slaString}</h3>

      {itemCards?.length && (
        <div className="res-menu-list-container">
          <h4>Menu Items</h4>
          <ul>
            {itemCards.map((item) => {
              return (
                <li key={item?.card?.info?.id}>
                  {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  ) : (
    <NoResults message="No resutls found" />
  );
};

export default RestaurantMenu;
