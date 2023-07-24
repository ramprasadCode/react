
import React from "react";
import ReactDOM from "react-dom";

//nomal way of writing
// const TitleOLD= function x() {
//     return <h1>Title </h1>;
// };


//React compenent , array funtions
const Title = () => {
    return <h1>Title </h1>;
};

//React component
const Heading = () => {
    return <div>
        <Title />
        <h2>Second line</h2>
    </div>
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
