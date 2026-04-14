import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) {
    return <h1>Loading.............</h1>;
  }

  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu : </h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
