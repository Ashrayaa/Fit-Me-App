import React from "react";
// import { restaurantlist } from "../config";
import RestaurantCard from "./RestaurantCard";
import Vector from "/assets/images/Vector.png";
import { useState, useEffect } from "react";
import { MainShimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API_URL } from "../config";
import { Player } from "@lottiefiles/react-lottie-player";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage(`No restaurant matches for "${searchText}"`);
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  if (!allRestaurants)
    return (
      <>
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

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:px-6 justify-center items-center lg:gap-8 bg-[#FC8019] py-10">
        <h1 className="text-white font-medium text-lg">Search by Restaurant</h1>
        <img src={Vector} className="w-4 hidden lg:block" />

        <div className="relative flex flex-col gap-4">
          <div className="hidden absolute inset-y-0 left-0 lg:flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="search"
            className="block w-[340px] md:w-[500px] lg:w-[700px] p-4 pl-4 lg:pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg outline-none bg-gray-50"
            placeholder="Enter search text here.."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            required
          />
          <button
            type="submit"
            className="text-white  absolute right-2.5 bottom-2.5 bg-black   font-medium rounded-lg text-sm px-4 py-2"
            onClick={() => {
              searchData(searchText, allRestaurants);
            }}
          >
            Search
          </button>
        </div>
      </div>
      {errorMessage && (
        <div className="flex flex-col gap-4 justify-center items-center">
          <Player
            autoplay
            loop
            className="w-[500px] h-[500px]"
            src="https://assets2.lottiefiles.com/packages/lf20_jbt4j3ea.json"
          ></Player>
          <h1 className="text-xl font-semibold text-black">{errorMessage}</h1>
          <h4 className="text-base font-normal text-[#808080] w-[500px] text-center">
            Unfortunately, it seems your search for this restaurant didn't yield
            any results.
          </h4>
        </div>
      )}

      {/* {allRestaurants?.length == 0 ? (
        <MainShimmer />
      ) : ( */}

        <div className="grid grid-cols-1 gap-4 -ml-16 mr-8 sm:grid-cols-2 grid-flow-row xl:grid-cols-3 lg:gap-y-8 lg:mr-12 lg:px-16">
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
      {/* )} */}
    </>
  );
};

export default Body;
