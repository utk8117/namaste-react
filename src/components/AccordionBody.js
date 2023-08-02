import React from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const AccordionBody = ({ items }) => {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div className="flex justify-between" key={item.card.info.id}>
          <div
            className="text-left p-2 m-2 border-b-2 border-gray-300"
            key={item.card.info.id}
          >
            <div className="text-lg font-semibold">{item.card.info.name}</div>
            <div className="text-md">
              Rs.{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="flex justify-center text-center items-center">
            <button
              className="p-2 px-3 m-2 bg-green-500 rounded-md h-10 text-white"
              onClick={() => {
                console.log("added", item.card.info);
                handleClick(item);
              }}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionBody;
