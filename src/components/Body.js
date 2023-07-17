import RestaurantCard from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST } from "../utils/constants";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      RESTAURANT_LIST
    );
    const json = await data.json();
    setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };
  const onlineStatus = useOnline();
  if(!onlineStatus) {
    return <h3>You are not online!!!!</h3>
  }

  return (
    <div className="body">
      <div className="search-filter-section">
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurants = allRestaurants.filter((value) =>
                value.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button clicked!");
            const newList = listOfRestaurant.filter((data) => {
              return data.data.avgRating >= 4;
            });
            setListOfRestaurant(newList);
          }}
        >
          Top Restaurants
        </button>
      </div>

      <div className="rest-container">
        {listOfRestaurant.length === 0 ? (
          <Shimmer />
        ) : (
          listOfRestaurant.map((data) => {
            return (
              <Link to={"/restaurant/" + data.data.id}  key={data.data.uuid}>
                <RestaurantCard restData={data} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};
export default Body;
