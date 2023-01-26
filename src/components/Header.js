import React from "react";
import Logo from "/assets/images/Logo (1).png";
import Bag from "/assets/images/Bag.png";
import { useState } from "react";
const loggedInUser = () => {
  return false;
};

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
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="flex px-6 mt-10 lg:mt-4 lg:px-2 gap-20 justify-between items-center lg:py-10">
      {/* {title} */}
      <Title />
      {/* {Title()} */}
      <div>
        <ul className="flex gap-4 lg:justify-between lg:items-center lg:gap-12 lg:mr-20">
          <li>
            <img src={Bag} className="w-8" />
          </li>
          {isLoggedIn ? (
            <li>
            <button onClick={()=>setIsLoggedIn(false)} className="bg-black text-white py-2 px-5 rounded-lg">
              Logout
            </button>
          </li>
            
          ) : (
            <li>
              <button onClick={()=> setIsLoggedIn(true)} className="bg-black text-white py-2 px-5 rounded-lg">
                Log In
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
