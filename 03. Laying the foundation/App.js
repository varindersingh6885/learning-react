import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hello World");

// JSX is transpiled before it reaches the JS Engine by Parcel
// Parcel is using Babel to transpile the JSX

// JSX => React.createElement => JS Object => HTMLElment(render)
const jsxHeading = <h1 id="heading">Hello World using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);
root.render(jsxHeading);
