
import React from "react";
import ReactDOM from "react-dom";

// const parent = React.createElement("div", { id: "parent" },
//     [React.createElement("div", { id: "child" },

//         [React.createElement("h1", {}, "Iam h1 child "),
//         React.createElement("h1", {}, "Iam h2 child ")]),

//     React.createElement("div", { id: "child" },

//         [React.createElement("h1", {}, "Iam h1 child "),
//         React.createElement("h1", {}, "Iam h2 child ")])]

// );
//root.render(parent);


const jsxHeading =(
     <h1 id = "name"
 className = "ram"> new JSX tag 
 </h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);