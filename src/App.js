import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Footer } from "./components/Footer";
import { Intro } from "./components/Intro";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
// import Delivery from "./components/Delivery";
// import Help from "./components/Help";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="flex flex-col gap-12">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: [<Intro />, <Body />],
      },

      {
        path: "/about",
        element: <About />,
      },
      // {
      //   path: "/delivery",
      //   element: <Delivery />,
      // },
      // {
      //   path: "/help",
      //   element: <Help />,
      // },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      }
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
