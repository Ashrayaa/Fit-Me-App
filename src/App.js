import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Footer } from "./components/Footer";
import { Intro } from "./components/Intro";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Delivery from "./components/Delivery";
// import Help from "./components/Help";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { FaqShimmer } from "./components/Shimmer";

const FAQ = lazy(() => import("./components/Faq"));
const About = lazy(() => import("./components/About"));
const Profile = lazy(() => import("./components/Profile"));

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
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        // children: [
        //   {
        //     path: "profile",
        //     element: <Profile />,
        //   },
        // ],
      },
      {
        path: "/faq",
        element: (
          <Suspense fallback={<FaqShimmer />}>
            <FAQ />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },

      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/profile",
        element: (
          <Suspense>
            <Profile />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
