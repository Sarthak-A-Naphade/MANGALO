import React, { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resID } = useParams();

  useEffect(() => {
    fetchMenu();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const fetchMenu = async () => {
    const data = await fetch(Menu_API_URL + resID);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((resMenu) => (
          <li key={resMenu.card.info.id}>{resMenu.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
