import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
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
    let data = await fetch(RESTAURANT_LIST);
    const json = await data.json();
    setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };
  const onlineStatus = useOnline();
  if (!onlineStatus) {
    return <h3>You are not online!!!!</h3>;
  }
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)
  console.log(listOfRestaurant);

  return (
    <div className="body">
      <div className="flex justify-evenly p-5">
        <div className="flex">
          <input
            type="text"
            className="border-2 border-solid border-gray-300 rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-500 ml-4 p-2 rounded-md"
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
          className="bg-green-500 ml-4 p-2 rounded-md"
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

      <div className="flex flex-wrap justify-evenly">
        {listOfRestaurant.length === 0 ? (
          <Shimmer />
        ) : (
          listOfRestaurant.map((data) => {
            return (
              <div className="flex border-2 border-solid border-gray-300 my-2 p-2 m-1 w-64 rounded-xl hover:border-green-500 hover:drop-shadow-xl hover:bg-lime-50">
                <Link to={"/restaurant/" + data.data.id} key={data.data.uuid}>
                  {
                    data.data.promoted ? <RestaurantCardPromoted restData={data} /> : <RestaurantCard restData={data} />
                  }
                 
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default Body;
