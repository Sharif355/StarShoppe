import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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

  const waves = {
    background: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='#e7008a' fill-opacity='1' d='M0,96L40,128C80,160,160,224,240,240C320,256,400,224,480,192C560,160,640,128,720,138.7C800,149,880,203,960,224C1040,245,1120,235,1200,202.7C1280,171,1360,117,1400,90.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z'></path></svg>")`,
  };

  return (
    <div className="container mx-auto" style={waves}>
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
          <Link to="/signIn">
            <button className="btn btn-accent">Log in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
