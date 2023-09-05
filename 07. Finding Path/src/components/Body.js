import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import NoResults from "./NoResults";
import { Link } from "react-router-dom";
import { RESTAURANTS_LIST_API } from "../utils/constants";
// import { restaurants } from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);

  const [searchText, setSearchText] = useState("");

  const fetchRestaurantsData = async () => {
    const data = await fetch(RESTAURANTS_LIST_API);
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
            <Link
              to={`/restaurants/${restaurant?.info?.id}`}
              key={restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  ) : (
    <NoResults message="No restaurants found!" />
  );
};

export default Body;
