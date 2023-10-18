import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Home/Home";
import AddProducts from "../Add Products/AddProducts";
import MyCart from "../My Cart/MyCart";
import Signin from "../SignIn/Signin";
import SignUp from "../SignUp/SignUp";
import CategoriesDetail from "../Home/CategoriesDetail";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/public/data.json"),
      },
      {
        path: "/categories/:id",
        element: <CategoriesDetail></CategoriesDetail>,
        loader: () => fetch("/public/data.json"),
      },
      {
        path: "/addProduct",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/signIn",
        element: <Signin></Signin>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default Routers;
