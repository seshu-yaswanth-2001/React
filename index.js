import { createElement } from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Hello from JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
