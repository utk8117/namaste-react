import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import RestaurantAccordions from "./RestaurantAccordions";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const { restId } = useParams();

  const fetchMenu = async () => {
    const result = await fetch(MENU_URL + restId);

    const json = await result.json();
    setResInfo(json.data);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (d) => d?.card?.card?.["@type"].includes("type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    );
  console.log("category", categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-10 p-5 text-2xl">{name}</h1>
      <h4 className="font-semibold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </h4>
      <h4>MENU</h4>
      <ul>
        {categories.map((section,id) => (
          <RestaurantAccordions key={id} data={section.card.card}/>
          // <li key={menuItem.card.info.id}>
          //   {menuItem.card.info.name} - Rs.{" "}
          //   {menuItem.card.info.price / 100 ||
          //     menuItem.card.info.defaultPrice / 100}
          // </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
