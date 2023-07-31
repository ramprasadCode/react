import { IMG_BASE_URL } from "../utils/constants";

const RestarentCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId,name,avgRating,areaName,costForTwo,deliveryTime} = resData?.info;
    return <div className = "res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img
        className="res-logo"
        alt = "res-logo"
        src = {IMG_BASE_URL+cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{areaName}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
    </div>
 
}

export default RestarentCard;
