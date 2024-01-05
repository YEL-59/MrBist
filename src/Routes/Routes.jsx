import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OrderFood from "../Pages/Order/OrderFood/OrderFood";




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
          path: "/orderfood",
          element: <OrderFood/>,
        },
      ],
    },
  ]);