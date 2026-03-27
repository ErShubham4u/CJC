import RestaurantCard from "./RestaurantCard";
import { resList } from "../../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resList[0]} />
      </div>
    </div>
  );
};

export default Body;
