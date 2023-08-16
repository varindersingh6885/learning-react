import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hello World");

const jsxHeading = <h1 id="heading">Hello World using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);
root.render(jsxHeading);
