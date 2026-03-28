import RestaurantCard from "./RestaurantCard";
import { resList } from "../../utils/mockData";

const Body = () => {

  let listOfRestaurants = resList;

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            listOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.0
            );
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
