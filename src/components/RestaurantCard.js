import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    slaString,
    costForTwoString,
  } = restData;
  return (
    <div className="">
      <div>
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="rest-logo"
          className="rounded-md"
        />
        <h3 className="text-xl text-green-900 font-bold">{name}</h3>
        <span className="text-sm">{cuisines.join(", ")}</span>
        <br />
        <div className="flex flex-col h-full justify-between">
          <div className="flex justify-between text-green-900">
            <span>{avgRating} &#9733;</span>
            <span>{slaString}</span>
          </div>
          <div className="">{costForTwoString}</div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-950 text-white p-1 rounded-md">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};
