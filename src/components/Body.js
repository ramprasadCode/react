import { useState } from "react";
import { resList } from "../utils/staticData";
import RestarentCard from "./RestarentCard";

const Body = () => {
    const [listOfRetarents,setListOfRetos] = useState(resList);
    return <div className = "body">
        <div className = "filter">
            <button className="filter-btn" 
            onClick={()=> {
                const filterdList = listOfRetarents.filter(
                    (res) => res.info.avgRating > 4 
                    );
                    setListOfRetos(filterdList);
            }}> Filter by 4 rating
                
                </button></div>

        <div className = "res-container">
        {
            listOfRetarents.map(restaurent => <RestarentCard key = {restaurent.info.id} resData = {restaurent}/>)
        };
        </div>
    </div>
}

export default Body; 