import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { DetailPageShimmer } from "./Shimmer";
import Offertag from "/assets/images/offertag.png";
import Star from "/assets/images/green star.png";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
 
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return !restaurant ? (
    <DetailPageShimmer />
  ) : (
    <div>
      {/* black screen */}
      <div className="flex flex-col justify-center gap-6 lg:flex-row bg-black text-white p-10 lg:justify-around">
        {/* image */}
        <img
          className=" w-72 rounded-md lg:ml-24"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          key="res1"
          id="res12"
          alt="KFC"
        />
        {/* div for restarant */}
        <div className="flex flex-col gap-2 justify-center lg:mr-24">
          <h1 className="text-2xl font-medium">{restaurant?.name}</h1>

          <h4>{restaurant?.cuisines?.join(" , ")}</h4>

          <div className="flex gap-2">
            {/* <h4>{restaurant?.locality}</h4>
            <h4>,</h4> */}
            {/* <h4>{restaurant?.city}</h4>
            <h4>,</h4> */}
            <h4>{restaurant?.area}</h4>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:gap-8 ">
            <div className="flex items-center sm:flex-col gap-2">
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
            <div className="bg-white w-px hidden sm:flex text-white"></div>
            <div className="flex items-center sm:flex-col gap-2">
              <h4 className="text-sm font-medium">29 Mins</h4>
              <h4 className="text-xs font-light">Delivery Time</h4>
            </div>
            <div className="bg-white h-12 w-px hidden sm:flex text-white"></div>

            <div className="flex items-center sm:flex-col gap-2">
              <h4 className="text-sm font-medium">
                {restaurant?.costForTwoMsg}
              </h4>
              <h4 className="text-xs font-light">Cost for two</h4>
            </div>
          </div>
        </div>
        {/* div for offers */}
        <div className="border-2 rounded-xl flex flex-col gap-4 border-dashed border-[#FC8019] p-3 sm:p-6 sm:mr-32">
          <h1 className="text-[#FC8019] font-medium text-lg">Offers</h1>
          <div className="flex gap-4">
            <img src={Offertag} key="offertag" className="w-6 h-6" />
            <h4 className="font-light text-sm">
              50% off upto 100 rs | Use code TRYNEW
            </h4>{" "}
          </div>
          <div className="flex gap-4">
            <img src={Offertag} key="offertag" className="w-6 h-6" />
            <h4 className="font-light text-sm">
              10% off | Use code PARTY
            </h4>{" "}
          </div>
        </div>
      </div>
      {/* search bar */}
      {/* favourite */}

      <div className="grid grid-flow-row p-8 lg:grid-cols-4 lg:p-12 lg:px-24">
        <div className="hidden lg:flex flex-col gap-4 mr-6">
          {restaurant?.menu?.widgets.map((item, index) => (
            <h6
              className="font-medium text-sm hover:text-[#FC8019] text-right"
              id={item.name}
              key={index}
            >
              <a href={"#" + item.name}> {item.name}</a>
            </h6>
          ))}
        </div>
        <div className="w-px hidden lg:flex bg-gray-200 border-0 dark:bg-gray-700"></div>

        {/* <div className="bg-[#808080] w-0.5 border-2 border-solid"></div> */}

        {/* menu list */}
        <div className="lg:-ml-72">
          {restaurant?.menu?.items &&
            Object.values(restaurant?.menu?.items).map((item, index) => (
              <div className="">
                <div className="grid grid-flow-row grid-cols-2 justify-between gap-20 xl:gap-48">
                  <div className="flex flex-col gap-2">
                    <div className="w-4">
                      {item?.attributes?.vegClassifier === "VEG" ? (
                        <img src="https://iamgoingvegan.b-cdn.net/wp-content/uploads/2020/05/Indian-Vegetarian-Mark-1-1024x1024.jpg" />
                      ) : item?.attributes?.vegClassifier === "NONVEG" ? (
                        <img src="https://w7.pngwing.com/pngs/815/552/png-transparent-lentil-soup-veggie-burger-vegetarianism-vegetarian-and-non-vegetarian-marks-non-veg-food-miscellaneous-angle-food-thumbnail.png" />
                      ) : (
                        " "
                      )}
                    </div>
                    <h4 className="text-[#202020] font-medium text-sm">
                      {item?.name}
                    </h4>
                    <h4 className="text-[#000000] text-sm font-medium">
                      ₹{item?.price / 100}
                    </h4>
                    <h5 className="text-[#808080] text-sm font-light mt-4 lg:w-[430px]">
                      {item?.description}
                    </h5>
                  </div>

                  <div className="flex flex-col items-center  ">
                    <img
                      alt="#"
                      className="lg:w-32 rounded-lg"
                      src={
                        !item?.cloudinaryImageId
                          ? "https://cdn3d.iconscout.com/3d/premium/thumb/food-and-drink-5727926-4800418.png"
                          : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                            item.cloudinaryImageId
                      }
                    />
                    <button className="text-[#1AC84B] w-24 -mt-5 font-medium bg-white px-6 py-2 border rounded-lg shadow-lg border-white z-10">
                      Add
                    </button>
                  </div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                {/* <div className="bg-[#808080] mt-8 mb-12 h-0.5 border-2 border-solid"></div> */}
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
        {/* CART <Cart/> - make it as a component and call below */}
        <div className="hidden lg:flex flex-col gap-6 ml-14">
          <div className="flex justify-between">
            <h3 className="font-medium text-lg">Cart</h3>
            <h5>2 items</h5>
          </div>
          <h4 className="text-sm font-normal">
            from <span className="text-[#FC8019]">Lunch Box</span>
          </h4>
          <div className="flex justify-between">
            <div className="flex flex-col text-xs font-light">
              <h4>Brunch for 2 - Veg</h4>
              <h4 className="text-[#808080]">₹599</h4>
            </div>
            <h5> - 1 + </h5>
          </div>
          <h4 className="text-sm font-normal">
            from <span className="text-[#FC8019]">Fasso</span>
          </h4>
          <div className="flex justify-between">
            <div className="flex flex-col text-xs font-light">
              <h4>Paneer Rice</h4>
              <h4 className="text-[#808080]">₹200</h4>
            </div>
            <h5> - 1 + </h5>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <h4 className="text-lg font-medium">Subtotal</h4>
              <h4 className="text-[#808080] font-light text-xs">
                Extra charges may apply
              </h4>
            </div>
            <h5> ₹799 </h5>
          </div>

          <button className="text-white bg-[#FC8019] font-medium text-lg py-2 rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
