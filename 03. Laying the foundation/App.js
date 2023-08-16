import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = <h1 id="heading">Hello World using JSX</h1>;

// React Functional Component
const HeadingComponent = () => (
  <div id="container">
    <h1 id="heading">h1 in functional component</h1>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
