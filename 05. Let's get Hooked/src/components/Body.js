import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <label htmlFor="search-res">Search: </label>
        <input id="search-res" />
      </div>
      <div className="restaurant-container">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
