import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

  const fetchRestaurantsData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    console.log(data);
  };

  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  const filterTopRated = () => {
    return listOfRestaurants.filter(
      (restaurants) => restaurants.info.avgRating >= 4
    );
  };

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
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
