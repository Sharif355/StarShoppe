import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/myCart">My Cart</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(
        Swal.fire({
          icon: "success",
          title: "Logged Out Successfully",
          confirmButtonText: "Ok",
        })
      )
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: error.message,
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div className="container mx-auto">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
              <Link to="/signIn">
                <button className="ml-3">Log in</button>
              </Link>
            </ul>
          </div>
          <img
            className=" w-14 rounded-full"
            src="https://i.ibb.co/NyFtB8H/logo.png"
            alt=""
          />
          <a className=" text-2xl normal-case font-semibold ml-2">
            StarShoppe{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end hidden md:flex">
          {user ? (
            <div className="flex items-center gap-2">
              {" "}
              <img
                className="w-10 rounded-full"
                src={user.photoURL}
                alt=""
              />{" "}
              <p>{user.displayName}</p>
              <button onClick={handleLogOut} className="btn btn-accent">
                Log Out
              </button>
            </div>
          ) : (
            <Link to="/signIn">
              <button className="btn btn-accent">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
