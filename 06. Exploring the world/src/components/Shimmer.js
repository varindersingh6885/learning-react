import { CDN_URL_SWIGGY_IMAGES } from "../utils/constants";

const Shimmer = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    sla: { slaString },
  } = props?.resData?.info;
  return <div className="restaurant-card"></div>;
};

export default Shimmer;
