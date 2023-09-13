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
    <div className="h-full py-2">
      <div className="w-[200px] h-full p-2 rounded-md shadow-md m-2 bg-gray-100 hover:bg-gray-200">
        <img
          className=" w-full rounded-t-lg h-32"
          src={`${CDN_URL_SWIGGY_IMAGES}/${cloudinaryImageId}`}
          alt="restaurant-logo"
        />
        <h3 className="font-bold py-1 ">{name}</h3>
        <h4>Cuisisnes: {cuisines.join(", ")}</h4>
        <h4>Rating: {avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>ETA: {slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
