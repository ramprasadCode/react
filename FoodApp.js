
import React from "react";
import ReactDOM from "react-dom";

const RestarentCard = () => {
    return <div className = "res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img
        className="res-logo"
        alt = "res-logo"
        src = "https://www.cookwithmanali.com/wp-content/uploads/2019/09/Vegetable-Biryani-Restaurant-Style.jpg"/>
        <h3>megaha foods</h3>
        <h4>Biryani, North Indian, Asian</h4>
        <h4>38 minutes</h4>
    </div>
 
}
const Body = () => {
    return <div className = "body">
        <div className = "search">search</div>
        <div className = "res-container">
            <RestarentCard/>
            <RestarentCard/>
            <RestarentCard/>
            <RestarentCard/>
            <RestarentCard/>
            <RestarentCard/>
            <RestarentCard/>
            <RestarentCard/>
            <RestarentCard/>
        </div>
    </div>
}

const Header = () => {
    return (
        <div className= "header">
        <div className = "logo-container">
            <img 
            className = "logo"
            src = "https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381320.jpg"/>
        </div>    
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>);
};


const AppLayout = () => {
    return (<div className="app">
        <Header />
        <Body />
    </div>);
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
