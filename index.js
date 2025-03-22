import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

// 1st way of writing html in JavaScript
const heading1 = React.createElement(
  "h1",
  {
    key: "2019",
  },
  "Heading 1 from React.createElement"
);

// react.createElement => object => HTML(DOM)

const heading2 = React.createElement(
  "h2",
  {
    key: "2020",
  },
  "Heading 2 from React.createElement"
);

const container = createElement("div", {}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
