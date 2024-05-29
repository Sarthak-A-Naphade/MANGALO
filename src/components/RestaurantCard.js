import React from "react";
import { CDN_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[225px] rounded-lg bg-gray-200 hover:bg-gray-300">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_IMG_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export const withPromotedLablel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="p-2 m-2 rounded-lg absolute bg-green-200">Opened</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
