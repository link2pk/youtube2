import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <main
      className={
        "p-2 relative  bg-white flex-1 " + (isMenuOpen ? "ml-36 " : "ml-9 ")
      }
    >
      <Outlet />
    </main>
  );
};

export default MainContainer;
