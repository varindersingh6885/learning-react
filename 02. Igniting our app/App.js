const parent = React.createElement(
  "div",
  {
    id: "parent-div",
  },
  React.createElement("div", { id: "child-div" }, [
    React.createElement("h2", { id: "heading" }, "Hello World from React! 1"),
    React.createElement("h2", { id: "heading" }, "Hello World from React! 2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);
root.render(parent);
