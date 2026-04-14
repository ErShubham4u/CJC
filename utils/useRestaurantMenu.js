import React from "react";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2617554&lng=82.9816562&restaurantId=" +
        resId,
    );
    const json = await data.json();
    setResMenu(json.data);
  };

  return resMenu;
};

export default useRestaurantMenu;
