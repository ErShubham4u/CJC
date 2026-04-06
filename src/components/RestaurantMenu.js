import React from "react";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2617554&lng=82.9816562&restaurantId=243625&catalog_qa=undefined&submitAction=ENTER",
    );
    const json = await data.json();
    console.log(json);
    setResMenu(json.data);
  };

  if (!resMenu) {
    return <h1>Loading..............................</h1>;
  }

  const { name, cuisines } = resMenu.cards[2].card.card.info;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>Menu : </h2>
      <ul>
        <li>Pizza</li>
        <li>Burger</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
