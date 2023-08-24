import { CDN_URL_SWIGGY_IMAGES } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    sla: { slaString },
  } = props?.resData?.info;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={`${CDN_URL_SWIGGY_IMAGES}/${cloudinaryImageId}`}
        alt="restaurant-logo"
      />
      <h3>{name}</h3>
      <h4>Cuisisnes: {cuisines.join(", ")}</h4>
      <h4>Rating: {avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>ETA: {slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
