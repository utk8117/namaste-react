import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: 1 }, "Hi I am h1"),
    React.createElement("h2", { key: 2 }, "Hi I am h2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
