import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import Offertag from "/assets/images/offertag.png";
import Star from "/assets/images/green star.png";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=8.5241391&lng=76.9366376&menuId=" +
        resId
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }
  // if(!restaurant){
  //   return <Shimmer/>;
  // }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      {/* <h1>{resId}</h1> */}
      {/* black screen */}
      <div className="flex flex-col justify-center gap-6 lg:flex-row bg-black text-white p-12 lg:justify-around">
        {/* image */}
        <img
          className=" w-72 rounded-md"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          key="res1"
          id="res12"
          alt="KFC"
        />
        {/* div for restarant */}
        <div className="flex flex-col gap-2 justify-center">
          <h1 className="text-2xl font-medium">{restaurant?.name}</h1>

          <h4>{restaurant?.cuisines?.join(" , ")}</h4>

          <div className="flex gap-2">
            <h4>{restaurant?.locality}</h4>
            <h4>,</h4>
            <h4>{restaurant?.city}</h4>
            <h4>,</h4>
            <h4>{restaurant?.area}</h4>
          </div>

          <div className="flex gap-8 ">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 justify-center">
                <img src={Star} className="w-5 h-5" />
                <h4 className="text-sm font-medium">
                  {restaurant?.avgRating} stars
                </h4>
              </div>
              <h4 className="text-xs font-light">
                {restaurant?.totalRatingsString}
              </h4>
            </div>
            <div className="bg-white h-12 text-white border-2 border-solid"></div>
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-medium">29 Mins</h4>
              <h4 className="text-xs font-light">Delivery Time</h4>
            </div>
            <div className="bg-white h-12 text-white border-2 border-solid"></div>

            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-medium">
                {restaurant.costForTwoMsg}
              </h4>
              <h4 className="text-xs font-light">Cost for two</h4>
            </div>
          </div>
        </div>
        {/* div for offers */}
        <div className="border-2 rounded-xl flex flex-col gap-4 border-dashed border-[#FC8019] p-6">
          <h1 className="text-[#FC8019] font-medium text-lg">Offers</h1>
          <div className="flex gap-4">
            <img src={Offertag} key="offertag" className="w-6" />
            <h4 className="font-light text-sm">
              50% off upto 100 rs | Use code TRYNEW
            </h4>{" "}
          </div>
          <div className="flex gap-4">
            <img src={Offertag} key="offertag" className="w-6" />
            <h4 className="font-light text-sm">
              10% off | Use code PARTY
            </h4>{" "}
          </div>
        </div>
      </div>
      {/* search bar */}
      {/* favourite */}

      {/* menu list */}
      <div className="flex flex-col gap-4">
        {restaurant?.menu?.items &&
          Object.values(restaurant?.menu?.items).map((item, index) => (
            <div className="px-12 py-10">
              <div className="flex flex-col">
                <h6
                  className="font-medium text-lg hover:text-[#FC8019]"
                  id={item.category}
                >
                  {item.category}
                </h6>
              </div>
              <div className="grid grid-flow-row gap-4 lg:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <h4 className="text-[#202020] font-medium text-lg">{item?.name}</h4>
                  <h4 className="text-[#808080] text-sm font-medium">₹{item?.price}</h4>
                  <h5 className="text-[#808080] text-xs font-light">{item?.description}</h5>

                </div>
                <div className="flex flex-col items-center ">
                  <img
                    className="w-52 rounded-lg"
                    src={
                      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                      item.cloudinaryImageId
                    }
                  />
                  <button className="text-[#1AC84B] w-24 -mt-5 font-medium bg-white px-6 py-2 border rounded-lg shadow-lg border-white z-10">
                    ADD
                  </button>
                </div>
              </div>
              <div className="bg-[#808080] mt-12 h-0.5 border-2 border-solid"></div>
            </div>
            // (
            //   <div>
            //     <li key={item.id}>{item.name}</li>
            //     <li>{item.description}</li>
            //   </div>
            // ),
            // (<li></li>)
          ))}
      </div>
     
    </div>
  );
};
export default RestaurantMenu;
