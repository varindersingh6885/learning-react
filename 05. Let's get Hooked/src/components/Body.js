import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

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
