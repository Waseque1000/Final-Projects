import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

//
const NavBar = () => {
  // user
  const { user, logOut } = useContext(AuthContext);
  // console.log(user, logOut);
  //

  const [cart] = useCart();

  //
  const [isAdmin] = useAdmin();

  // console.log(cart.length);
  //
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to={"/"}>Home </Link>
      </li>
      <li className="text-white">
        <Link to={"/menu"}>Our Menu </Link>
      </li>
      <li className="text-white">
        <Link to={"/order/salad"}>Order</Link>
      </li>
      <li className="text-white">
        <Link to={isAdmin ? "/dashboard/adminhome" : "/dashboard/userhome"}>
          Dashboard
        </Link>
      </li>
      <li>
        <Link to={"/dashboard/mycart"}>
          <button className="flex ">
            <FaShoppingCart className="text-2xl"></FaShoppingCart>
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
      {/* 
      <li className="text-white">
        <Link to={"/signup"}>Sign Up</Link>
      </li> */}
      {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-active btn-ghost">
            Log Out
          </button>
        </>
      ) : (
        <>
          <li className="text-white active:text-white">
            <Link to={"/login"}>Log In</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            Bistro <span>Boss</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <span className="mr-6">{user.displayName}</span>
            </>
          ) : (
            <></>
          )}
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
