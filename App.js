// const heading = React.createElement("h1", {}, "Hello EveryOne !!!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const heading = React.createElement("h1", { id: "heading" }, "Hello EveryOne !!!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const heading = React.createElement("h1", { id: "heading", xyz : "abc" }, "Hello EveryOne !!!");
// console.log(heading)    // object

/*

<div id="parent">
  <div id="child">
    <h1>I'm h1 tag</h1>
  </div>
</div>;

*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I'm h1 tag"),
//   ),
// );
// console.log(parent)    // object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm h1 tag"),
//     React.createElement("h2", {}, "I'm h2 tag"),
//   ]),
// );

// console.log(parent); // object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

const heading = React.createElement("h1", {}, "Hello EveryOne !!!");
console.log(heading); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
