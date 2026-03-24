import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id: "heading" }, "Hello EveryOne !!!");
// console.log(heading)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const jsxHeading = <h1 className="heading">Hello EveryOne !!!</h1>;
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
