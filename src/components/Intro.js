import React from "react";
import Frame from "/assets/images/Frame 2.png";
import Banana from "/assets/images/banana.svg";
import Apple from "/assets/images/apple.png";
import Union from "/assets/images/Union.png";

export const Intro = () => {
  return (
    <div className="flex gap-8">
      <div className="hidden xl:block mt-44 w-[500px]">
        <img src={Union} id="union" key="frame2" />
      </div>
      <div className="flex flex-col -mt-6 lg:gap-4 gap-2 xl:mt-8 lg:px-32 xl:px-2 p-6">
        <h1 className=" lg:text-5xl text-3xl font-medium ">
          Premium <span className="text-[#FC8019]">Quality</span>
        </h1>

        <h1 className="lg:flex items-center gap-3 lg:text-5xl text-3xl font-medium">
          Food for your
          <img src={Banana} id="banana" key="banana1" className="hidden lg:flex lg:w-28 w-20" />
          <span className="text-[#FC8019]"> healthy </span>
        </h1>

        <h1 className="flex items-center gap-3 lg:text-5xl text-3xl font-medium">
          <img src={Apple} id="apple" key="apple1" className="hidden lg:flex lg:w-28 w-20" />
          <span className="text-[#FC8019]"> & Daily Life</span>
        </h1>

        <p className="break-words w-[300px] sm:w-[500px] lg:w-[700px] mt-4 text-sm font-light">
          Your one-stop destination for delicious delivery meals. Elevate your
          daily meals with premium quality, healthy food options, designed to
          nourish your body and satisfy your taste buds.
        </p>

        <div className="flex flex-col gap-4 mt-4">
          <h3 className="text-[#404040] text-sm font-normal">
            Popular cities in India
          </h3>
          <ul className="flex gap-6 mt-4 cursor-pointer flex-wrap">
            <li className="text-[#808080] hover:text-[#FC8019]   text-sm font-normal">
              Hyderabad
            </li>
            <li className="text-[#FC8019] hover:text-[#808080]  text-sm font-normal">
              Chennai
            </li>
            <li className="text-[#808080] hover:text-[#FC8019]  text-sm font-normal">
              Mumbai
            </li>
            <li className="text-[#FC8019] hover:text-[#808080]  text-sm font-normal">
              Bangalore
            </li>
            <li className="text-[#808080] hover:text-[#FC8019]  text-sm font-normal">
              Delhi
            </li>
            <li className="text-[#FC8019]  hover:text-[#808080] text-sm font-normal">
              Kolkata
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden xl:flex">
        <img src={Frame} id="intro frame" key="frame1" />
      </div>
    </div>
  );
};
