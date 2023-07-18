import React from "react";

const AccordionBody = ({ items }) => {
  console.log(items[0].card.info);
  return (
    <div>
      {items.map((item) => (
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
      ))}
    </div>
  );
};

export default AccordionBody;
