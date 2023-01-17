import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Footer } from "./components/Footer";
import { Intro } from "./components/Intro";
import { Search } from "./components/Search";

const AppLayout = () => {
  return (
    <div className="flex flex-col gap-12">
      <Header />
      <Intro/>
      <Search/>
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
