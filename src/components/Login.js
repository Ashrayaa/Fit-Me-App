import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex flex-col p-6 gap-12 sm:gap-16 lg:ml-[35%] lg:p-10 lg:border lg:border-neutral-100 lg:w-[500px] lg:py-12 lg:shadow-lg lg:rounded-lg justify-center items-center align-middle">
      <div className="grid sm:grid-cols-2 justify-center sm:gap-20 lg:gap-24 items-center grid-flow-row">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-5xl font-medium">Login</h1>
          <h5 className="text-sm font-medium">
            or{" "}
            <span className="text-[#FC8019] cursor-pointer">
              <Link to="/signup">create an account</Link>
            </span>
          </h5>
        </div>
        <img
          src="	https://cdn3d.iconscout.com/3d/premium/thumb/burger-5863026-4897345.png"
          className="hidden sm:flex sm:w-24 rounded-full"
        />
      </div>

      <form
        className="flex flex-col gap-4 lg:w-96"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          {...register("email", {
            required: "Your email is required",
            pattern: /^\S+@\S+$/i,
          })}
          className="border p-4 border-gray-100 shadow-sm rounded-md outline-none"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        <p>
          {errors.email && (
            <span className="text-xs font-medium text-red-500">
              Please enter a valid email address
            </span>
          )}
        </p>
        <input
          {...register("password", {
            required: "Password is a required field",
            minlength: 8,
          })}
          className="border p-4 border-gray-100 shadow-sm rounded-md outline-none"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <p>
          {errors.password && (
            <span className="text-xs font-medium text-red-500">
              Please enter password with minimum 8 characters
            </span>
          )}
        </p>

        {/* <input
          className="border p-4 border-gray-100 shadow-sm rounded-md outline-none"
          placeholder="Phone Number"
          //type="tel"
          //name="mobile"
          //id="mobile"
          //value
        /> */}
        <button className="bg-[#FC8019] p-4 text-white font-medium text-xl rounded-md">
          LOGIN
        </button>
        <p className="font-normal text-[#808080] text-xs text-center">
          By clicking on Login, I accept the Terms & Conditions & Privacy Policy
        </p>
      </form>
    </div>
  );
};

export default Login;
