import React from "react";
import Logo from "/assets/images/Logo (1).png"
import Bag from "/assets/images/Bag.png"

const Title = () => (
  <>
    <a href="/">
      <img
        id="title"
        key="foodvilla"
        className="w-24 ml-36"
        alt="Logo"
        src={Logo}
      />
    </a>
  </>
);

const Header = () => {
  return (
    <div className="flex justify-between items-center py-10">
      {/* {title} */}
      <Title />
      {/* {Title()} */}
      <div>
        <ul className="flex justify-between items-center gap-12 mr-20">
          <li><img src={Bag} className="w-8"/></li>
          <li><button className="bg-black text-white py-2 px-5 rounded-lg">Sign In</button></li>
         
        </ul>
      </div>
    </div>
  );
};

export default Header;
