import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2617554&lng=82.9816562&restaurantId=" +
        resId,
    );
    const json = await data.json();
    console.log(json);
    setResMenu(json.data);
  };

  if (resMenu === null) {
    return <h1>Loading.............</h1>;
  }

  const { name, cuisines, costForTwoMessage } = resMenu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu : </h2>
      {/* <ul>
        <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li>
      </ul> */}
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
