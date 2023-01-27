import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col gap-16 ml-[35%] p-10 border border-neutral-100 w-[500px] py-12 shadow-xl rounded-lg justify-center items-center align-middle">
      <div className="grid grid-cols-2 gap-24 items-center grid-flow-row">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-medium">Login</h1>
          <h5 className="text-sm font-medium">
            or <span className="text-[#FC8019]">create an account</span>
          </h5>{" "}
        </div>
        <img
          src="	https://cdn3d.iconscout.com/3d/premium/thumb/burger-5863026-4897345.png"
          className="w-24 rounded-full"
        />
      </div>

      <div className="flex flex-col gap-4 w-96">
        <input
          className="border p-4 border-gray-100 shadow-sm rounded-md outline-none"
          placeholder="Phone Number"
          //type="tel"
          //name="mobile"
          //id="mobile"
          //value
        />
        <button className="bg-[#FC8019] p-4 text-white font-medium text-xl rounded-md">
          LOGIN
        </button>
        <p className="font-normal text-[#808080] text-xs text-center">
          By clicking on Login, I accept the Terms & Conditions & Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;
