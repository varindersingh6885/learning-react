import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const title = <h1>this is a title</h1>;

// React Functional Component
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 id="heading">20 + 10 = {20 + 10}</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
