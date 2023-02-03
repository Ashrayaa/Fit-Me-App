import React from "react";
// import { restaurantlist } from "../config";
import RestaurantCard from "./RestaurantCard";
// import Vector from "/assets/images/Vector.png";
import { useState, useEffect } from "react";
import Shimmer, { MainShimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import Search from "./Search";

// function filterData(searchText, restaurants) {
//   const filterData = restaurants.filter((restaurant) =>
//     restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase)
//   );
//   return filterData;
// }

const Body = () => {
  // const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  if (!allRestaurants)
    return (
      <>
        <Search />
        <div className="flex flex-col gap-4 justify-center items-center">
          <Player
            autoplay
            loop
            className="w-[500px] h-[500px]"
            src="https://assets8.lottiefiles.com/packages/lf20_lillfalp.json"
          ></Player>
          <h1 className="text-xl font-semibold text-black">
            Hey there, Doors are closed
          </h1>
          <h4 className="text-base font-normal text-[#808080] w-[500px] text-center">
            Our restaurants are currently so popular, they're booked up faster
            than a clown car at a circus!
          </h4>
        </div>{" "}
      </>
    );

  // if (filteredRestaurants?.length === 0)
  //   return (
  //     <>
  //       <Search />
  //       <div className="flex flex-col gap-4 justify-center items-center">
  //         <Player
  //           autoplay
  //           loop
  //           className="w-[500px] h-[500px]"
  //           src="https://assets2.lottiefiles.com/packages/lf20_jbt4j3ea.json"
  //         ></Player>
  //         <h1 className="text-xl font-semibold text-black">
  //           No results found!
  //         </h1>
  //         <h4 className="text-base font-normal text-[#808080] w-[500px] text-center">
  //           Unfortunately, it seems your search for this restaurant didn't yield
  //           any results.
  //         </h4>
  //       </div>{" "}
  //     </>
  //   );

  return !filteredRestaurants ? (
    ((<Search />), (<MainShimmer />))
  ) : (
    <>
      <Search />

      <div className="grid grid-cols-1 gap-4 -ml-16 mr-8 lg:grid-cols-2 grid-flow-row xl:grid-cols-3 lg:gap-y-8 lg:mr-12 lg:px-16">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
