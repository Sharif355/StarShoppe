import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Home/Home";
import AddProducts from "../Add Products/AddProducts";
import MyCart from "../My Cart/MyCart";
import Signin from "../SignIn/Signin";
import SignUp from "../SignUp/SignUp";
import CategoriesDetail from "../Home/CategoriesDetail";
import ProductsDetail from "../Home/ProductsDetail";
import PrivateRoutes from "../Private/PrivateRoutes";
import UpdateProducts from "../Update/UpdateProducts";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/brands"),
      },
      {
        path: "/categories/:brand_name",
        element: <CategoriesDetail></CategoriesDetail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.brand_name}`),
      },
      {
        path: "/categories/:brand_name/:id",
        element: (
          <PrivateRoutes>
            <ProductsDetail></ProductsDetail>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/updates/:brand_name/:id",
        element: (
          <PrivateRoutes>
            <UpdateProducts></UpdateProducts>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/addProduct",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoutes>
            <MyCart></MyCart>
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/carts"),
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
