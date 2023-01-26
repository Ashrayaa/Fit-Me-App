import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";


const Error = () => {
  const err = useRouteError();
  return (
    <div className="flex flex-col justify-center gap-6 items-center mt-32 align-middle p-6">
      <h1 className="font-extrabold text-transparent text-8xl lg:text-9xl bg-clip-text bg-gradient-to-r from-[#f12711] to-[#f5af19]">Oops!</h1>
      <h2 className="font-bold text-2xl lg:text-3xl ">{err.status + " " + ":" + " " + err.status.text}</h2>
      <p className="text-slate-700 text-sm">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <a href="/"><button className="bg-[#FC8019] text-white py-2 px-5 rounded-lg">Go to Homepage</button></a>
    </div>
  );
};

export default Error;
