import { resList } from "../utils/staticData";
import RestarentCard from "./RestarentCard";

const Body = () => {
    return <div className = "body">
        <div className = "search">search</div>
        <div className = "res-container">
        {
            resList.map(restaurent => <RestarentCard key = {restaurent.info.id} resData = {restaurent}/>)
        };
        </div>
    </div>
}

export default Body;