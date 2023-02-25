import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <div className="flex flex-col p-6 gap-12 sm:gap-16 lg:ml-[35%] lg:p-10 lg:border lg:border-neutral-100 lg:w-[500px] lg:py-12 lg:shadow-lg lg:rounded-lg justify-center items-center align-middle">
      <div className="grid sm:grid-cols-2 justify-center items-center grid-flow-row">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-medium">Sign up</h1>
        </div>
        {/* <img
        src="	https://cdn3d.iconscout.com/3d/premium/thumb/burger-5863026-4897345.png"
        className="hidden sm:flex sm:w-24 rounded-full"
      /> */}
      </div>

      <div>
        <form
          className="flex flex-col gap-4 lg:w-96"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <input
            {...register("username", { required: true })}
            className="border p-4 border-gray-100 shadow-sm rounded-md outline-none"
            type="text"
            id="username"
            name="username"
            placeholder="Username"
          />
          <p>
            {errors.username && (
              <span className="text-xs font-medium text-red-600">
                Your username is required
              </span>
            )}
          </p>
          <input
            {...register("email", {
              required: "This is a required field",
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
              <span className="text-xs font-medium text-red-600">
                Please enter a valid email address
              </span>
            )}
          </p>
          <input
            {...register("password", {
              required: "This is a required field",
              minLength: 8,
            })}
            className="border p-4 border-gray-100 shadow-sm rounded-md outline-none"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <p>
            {errors.password && (
              <span className="text-xs font-medium text-red-600">
                Please enter a password with atleast 8 characters
              </span>
            )}
          </p>
          <input
            {...register("confirmpassword", {
              required: "This is a required field",
              validate: (value) => value === password,
            })}
            className="border p-4 border-gray-100 shadow-sm rounded-md outline-none"
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            placeholder="Confirm Password"
          />
          <p>
            {errors.confirmpassword && (
              <span className="text-xs font-medium text-red-600">
                Please enter the password same as above
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
            <Link to="/login">Sign Up</Link>
          </button>
        </form>

        <p className="font-normal text-[#808080] text-xs text-center mt-6">
          Already have an account? Please{" "}
          <span className="text-[#FC8019] font-medium cursor-pointer">
            <Link to="/login">Login</Link>
          </span>{" "}
        </p>
      </div>
    </div>
  );
};
export default Signup;
