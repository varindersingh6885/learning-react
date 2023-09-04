import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import NoResults from "./NoResults";
// import { restaurants } from "../utils/mockData";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);

  const [searchText, setSearchText] = useState("");

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
    setFilteredRestaurants(resList || []);
  };

  useEffect(() => {
    setIsDataLoading(true);
    fetchRestaurantsData();
  }, []);

  const filterTopRated = () => {
    return filteredRestaurants.filter(
      (restaurants) => restaurants.info.avgRating >= 4
    );
  };

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const filterRestaurants = () => {
    const filteredRestaurants = listOfRestaurants.filter((restaurant) => {
      return restaurant?.info?.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });

    setFilteredRestaurants(filteredRestaurants);
  };

  return isDataLoading ? (
    <Shimmer />
  ) : filteredRestaurants.length ? (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search Restauraunts"
            value={searchText}
            onChange={handleSearchTextChange}
          />
          <button className="btn-search" onClick={filterRestaurants}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurants(filterTopRated());
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  ) : (
    <NoResults message="No restaurants found!" />
  );
};

export default Body;
