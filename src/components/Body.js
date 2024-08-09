import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState(resList);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const handleFilter = () => {
    const filteredList = resList.filter((res) => res.info.avgRating > 4.5);
    setFilteredRestaurant(filteredList);
  };

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body m-8">
      <div className="filter flex mb-8 justify-center">
        <div className="search">
          <input
            placeholder="Search Restaurants and food"
            type="text"
            className="search-box border border-solid border-black h-9 w-56 font-medium"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="button px-4 py-2 mx-4 bg-[#41d4d8] rounded-lg hover:bg-[#4adfe4] font-medium active:bg-[#41d4d8]"
            onClick={() => {
              const filteredRestaurant = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn bg-[#dbcf00] px-5 rounded-lg font-medium hover:bg-[#dad137] active:bg-[#dbcf00]"
          onClick={handleFilter}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container res-container flex flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
