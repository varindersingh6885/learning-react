import { useEffect, useState } from "react";
import { RESTAURANTS_DETAILS_API } from "../utils/constants";

export const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const data = await fetch(`${RESTAURANTS_DETAILS_API}${resId}`);
    const json = await data.json();
    setResInfo(json.data);
    setIsLoading(false);
  };

  return { resInfo, isLoading };
};
