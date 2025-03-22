import { createElement } from "react";
import ReactDOM from "react-dom/client";

const heading1 = <h1 key="2019">Heading1 from JSX</h1>;
const heading2 = <h2 key="2020">Heading2 from JSX</h2>;

// const container = (
//   <div>
//     {heading1}
//     {heading2}
//   </div>
// );

// 1st way
const HeaderComponent = function () {
  return <h1>Hello from function component 1</h1>;
};

// 2nd way
const HeaderComponent2 = () => {
  return <h1>Hello from function component 2</h1>;
};

// 3rd way
const HeaderComponent3 = () => (
  <div>
    <ul>
      <li>List 1</li>
      <li>List 2</li>
    </ul>
  </div>
);

const container = (
  <div>
    {heading1}
    {heading2}
    {/* <HeaderComponent /> */}
    {HeaderComponent()}
    {/* the above also can be done */}
    <HeaderComponent2 />
    <HeaderComponent3 />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
