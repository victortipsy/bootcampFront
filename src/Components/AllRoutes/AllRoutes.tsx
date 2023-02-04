import React from "react";
import { useRoutes } from "react-router-dom";
import LogIn from "../Auth/LogIn";
import SignUp from "../Auth/SignUp";
import HomePage from "../Home/HomePage";
import SingleProduct from "../SingleProduct/SingleProduct";
import WishList from "../Wish/WishList";

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/wish",
      element: <WishList />,
    },
    {
      path: "/gadget",
      element: <SingleProduct />,
    },
  ]);
  return element;
};

export default AllRoutes;
