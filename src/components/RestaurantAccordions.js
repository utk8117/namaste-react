import React, { useState } from "react";
import AccordionBody from "./AccordionBody";

const RestaurantAccordions = ({ data }) => {
  const [expandAccordion, setExpandAccordion] = useState(false);
  return (
    <div
      className="flex flex-col w-6/12 mx-auto my-4 bg-slate-100 shadow-lg p-4 border-solid justify-between "
      onClick={() => setExpandAccordion(!expandAccordion)}
    >
      <div className="flex justify-between">
        <span className="font-bold text-lg">
          {data.title} &nbsp;({data.itemCards.length})
        </span>
        <span className="font-bold text-lg">+</span>
      </div>
      {expandAccordion && <AccordionBody items={data.itemCards} />}
    </div>
  );
};

export default RestaurantAccordions;
