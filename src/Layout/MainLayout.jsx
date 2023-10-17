import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="container mx-auto my-5">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
