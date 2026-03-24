import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 className="heading">Hello EveryOne !!!</h1>;
console.log(jsxHeading);

/*
React Component : 
Class Based Component - OLD
Functional Component  - NEW
*/

// React Functional Component

const Title = () => <h1 className="title">Hello EveryOne !!! - Title</h1>;

const HeadingComponent = () => (
  <div className="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Hello EveryOne !!! - Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
