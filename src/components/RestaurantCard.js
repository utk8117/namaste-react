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
  } = restData?.data;
  return (
    <div className="restaurant-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="rest-logo"
        className="rest-logo"
      />
      <h3>{name}</h3>
      <span className="cuisines-list">{cuisines.join(", ")}</span>
      <br />
      <div className="rating-eta-cost">
        <div className="rating-eta">
          <span>{avgRating} stars</span>
          <span>{slaString}</span>
        </div>
        <div>{costForTwoString}</div>
      </div>
    </div>
  );
};
export default RestaurantCard;
