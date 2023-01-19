import React from "react";
import { restaurantlist } from "../config";
import RestaurantCard from "./RestaurantCard";
// import { restaurantlist } from "../config";
// import { useState } from "react";

// function filterData(searchText, restaurants) {
//   return(
//     restaurants.filter((restaurant) => restaurants.data.name.includes(searchText))
//   );
// };

const Body = () => {
  // const [searchText, setSearchText] = useState("KFCC");
  // const [restaurants, setRestaurants] = useState(restaurantlist);
  return (
    <>
      {/* <div className="ml-12">
        <input
          type="text"
          placeholder="Search"
          className="border border-black"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="text-orange-800 bg-amber-400 p-4 border border-purple"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div> */}
      <div className="grid grid-cols-1 gap-4 -ml-16 mr-8 lg:grid-cols-2 grid-flow-row xl:grid-cols-3 lg:gap-y-8 lg:mr-12 lg:px-16">
        {restaurantlist.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>;
        })}
      </div>
    </>
  );
};

export default Body;
