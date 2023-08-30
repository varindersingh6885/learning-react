import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import { restaurants } from "../utils/mockData";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);

  const fetchRestaurantsData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const resList =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setIsDataLoading(false);
    setListOfRestaurants(resList || []);
  };

  useEffect(() => {
    setIsDataLoading(true);
    fetchRestaurantsData();
  }, []);

  const filterTopRated = () => {
    return listOfRestaurants.filter(
      (restaurants) => restaurants.info.avgRating >= 4
    );
  };

  if (isDataLoading) {
    return (
      <div>
        <div className="shimmer-container">
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(filterTopRated());
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants?.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
