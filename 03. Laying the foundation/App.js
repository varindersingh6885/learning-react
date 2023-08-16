import React from "react";
import ReactDOM from "react-dom/client";

// React Functional Component
const Title = () => <h1>this is a title</h1>;

// React Functional Component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 id="heading">heading in functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
