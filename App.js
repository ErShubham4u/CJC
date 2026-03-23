// const heading = React.createElement("h1", {}, "Hello EveryOne !!!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const heading = React.createElement("h1", { id: "heading" }, "Hello EveryOne !!!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const heading = React.createElement("h1", { id: "heading", xyz : "abc" }, "Hello EveryOne !!!");
console.log(heading)    // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);