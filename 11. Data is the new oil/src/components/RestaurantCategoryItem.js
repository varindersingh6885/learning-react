import { CDN_URL_SWIGGY_IMAGES_RESTAURANT_ITEMS } from "../utils/constants";

const RestaurantCategoryItem = (props) => {
  return (
    <div className="flex justify-between items-center border-b-2 py-2">
      <div className="p-2 w-9/12">
        <p className="">{props?.itemData?.name}</p>
        <p>
          ₹
          {props?.itemData?.price
            ? props?.itemData?.price / 100
            : props?.itemData?.defaultPrice / 100}
        </p>

        <p className="my-1 text-sm text-gray-400">
          {props.itemData?.description}
        </p>
      </div>
      <div className="w-3/12 p-2 h-full relative">
        <img
          className="w-full rounded-lg"
          src={
            CDN_URL_SWIGGY_IMAGES_RESTAURANT_ITEMS + props?.itemData?.imageId
          }
          alt="img-item"
        />
        <div className="absolute bottom-0 left-0 text-center w-full px-2">
          <button className="px-4 py-1 bg-white text-green-500 rounded-lg shadow-sm border">
            + ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategoryItem;
