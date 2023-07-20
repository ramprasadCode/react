





const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },

        [React.createElement("h1", {}, "Iam h1 child "),
        React.createElement("h1", {}, "Iam h2 child ")]),

    React.createElement("div", { id: "child" },

        [React.createElement("h1", {}, "Iam h1 child "),
        React.createElement("h1", {}, "Iam h2 child ")])]

);
//root.render(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);