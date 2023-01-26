import React from "react";
import FooterLogo from "/assets/images/footerlogo.png";
import Facebook from "/assets/images/facebook icon.png";
import Instagram from "/assets/images/insta.png";
import Twitter from "/assets/images/twitter icon.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-8 lg:flex-row lg:px-6 justify-center items-center lg:gap-44 bg-[#FC8019] py-10 lg:py-20">
        {/* Logo */}
        <img src={FooterLogo} alt="Footer Logo" className="w-24" />
        {/* Links */}
        <ul className="text-white flex gap-6 lg:gap-12 font-normal text-xs">
          <Link to="/about">
            <li className="cursor-pointer ">About Us</li>
          </Link>
          <li className="cursor-pointer ">Delivery</li>
          <li className="cursor-pointer ">Help & Support</li>
          <li className="cursor-pointer ">T & C</li>
        </ul>
        <div className="flex gap-6">
          {/* Social Icons */}
          <img src={Facebook} alt="Fb Logo" className="w-5" />
          <img src={Instagram} alt="Insta Logo" className="w-5" />
          <img src={Twitter} alt="Twitter Logo" className="w-5" />
        </div>
      </div>
    </>
  );
};
