import React from "react";
import Vector from "/assets/images/Vector.png"

export const Search = () => {
  return (
    <div className="flex justify-center items-center gap-8 bg-[#FC8019] py-10">
      <h1 className="text-white font-medium text-lg">Search by Restaurant</h1>
      <img src={Vector} className="w-4"/>
      {/* <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter the restaurant you're looking for..."
          value=""
          className="text-white border border-white rounded-lg p-4 w-96"
        />
        <button className="bg-[#202020] text-white p-4 px-6 rounded-lg font-medium">
          Search
        </button>
      </div> */}

      <form>
        <label
          for="search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="search"
            class="block w-[700px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg outline-none bg-gray-50"
            placeholder="Enter the restaurant you're looking for..."
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-black   font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
