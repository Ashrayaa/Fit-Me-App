import { useState } from "react";
import Vector from "/assets/images/Vector.png";
import React from "react";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase)
    );
    return filterData;
  }
  
const Search = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
  
  return (
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
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default Search;