import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import NoResults from "./NoResults";
import { Link } from "react-router-dom";
import { RESTAURANTS_LIST_API } from "../utils/constants";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import StatusOffline from "./StatusOffline";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

  if (!onlineStatus) {
    return <StatusOffline />;
  }

  return isDataLoading ? (
    <Shimmer />
  ) : filteredRestaurants.length ? (
    <div className="body">
      <div className="flex justify-between p-4 mt-2 mb-2">
        <div className="search">
          <input
            type="text"
            placeholder="Search Restauraunts"
            className="border border-solid p-2 rounded-lg"
            value={searchText}
            onChange={handleSearchTextChange}
          />
          <button
            className="ml-4 mr-4 border p-2 px-4 rounded-lg bg-blue-950 text-white"
            onClick={filterRestaurants}
          >
            Search
          </button>
        </div>
        <button
          className="mx-4 border p-2 px-4 rounded-lg bg-black text-white"
          onClick={() => {
            setFilteredRestaurants(filterTopRated());
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="p-4 flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={`/restaurants/${restaurant?.info?.id}`}
              key={restaurant.info.id}
            >
              {restaurant.info.avgRating > 4.5 ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
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
