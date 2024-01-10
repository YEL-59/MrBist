import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OrderFood from "../Pages/Order/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";




  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/menu",
          element: <Menu/>,
        },
        {
          path: "orderfood/:category",
          element: <OrderFood/>,
        },
        {
          path: "login",
          element: <Login/>,
        },
      ],
    },
  ]);