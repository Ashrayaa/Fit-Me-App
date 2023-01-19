import React from "react";
import Logo from "/assets/images/Logo (1).png"
import Bag from "/assets/images/Bag.png"

const Title = () => (
  <>
    <a href="/">
      <img
        id="title"
        key="foodvilla"
        className="w-24 lg:ml-36"
        alt="Logo"
        src={Logo}
      />
    </a>
  </>
);

const Header = () => {
  return (
    <div className="flex px-6 mt-10 gap-20 justify-between items-center lg:py-10">
      {/* {title} */}
      <Title />
      {/* {Title()} */}
      <div>
        <ul className="flex gap-4 lg:justify-between lg:items-center lg:gap-12 lg:mr-20">
          <li><img src={Bag} className="w-8"/></li>
          <li><button className="bg-black text-white py-2 px-5 rounded-lg">Sign In</button></li>
         
        </ul>
      </div>
    </div>
  );
};

export default Header;
