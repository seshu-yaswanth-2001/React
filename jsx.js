import React, { createElement } from "react";
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
    {HeaderComponent()}
    {/* the above also can be done */}
    <HeaderComponent2 />
    <HeaderComponent3 />
  </div>
);

// React fragment - it gives us a div like strucute but will not show in the html
const Containers = () => {
  return (
    // <React.Fragment>
    //   <h1>Hello</h1>
    //   <h1>Hello2</h1>
    // </React.Fragment>
    // this same as the above
    <>
      <h1>Hello</h1>
      <h1>Hello2</h1>
    </>
  );
};

// react styles
const styleObj = {
  border: "1px solid black",
};

const Style = () => (
  <>
    <h1 style={styleObj}>Hello</h1>
    {/* or we can directly write object in the tag itself */}
    <h1
      style={{
        background: "red",
      }}
    >
      Hello
    </h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Style />);
