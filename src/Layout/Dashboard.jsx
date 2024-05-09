import { Link, Outlet } from "react-router-dom";

import {
  FaBeer,
  FaCalendar,
  FaHome,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { FaBagShopping, FaBookTanakh, FaShop } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineMail } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div className="drawer  lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="  drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full pt-10 bg-yellow-500 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link>
              <FaHome></FaHome>
              USER HOME
            </Link>
          </li>

          <li>
            <Link>
              <FaShoppingCart> </FaShoppingCart>
              MY CART
            </Link>
          </li>
          <li>
            <Link>
              <FaWallet></FaWallet>
              PAYMENT HISTORY
            </Link>
          </li>
          <li>
            <Link>
              <FaCalendar></FaCalendar>
              RESERVATION
            </Link>
          </li>
          <li>
            <Link>
              <FaBookTanakh></FaBookTanakh>
              MY BOOKINGS
            </Link>
          </li>
          <div className="divider"> </div>
          {/*  */}
          <li>
            <Link to={"/"}>
              <FaHome></FaHome>
              HOME
            </Link>
          </li>
          {/*  */}
          <li>
            <Link to={"/menu"}>
              <TiThMenu></TiThMenu>
              MENU
            </Link>
          </li>
          {/*  */}
          <li>
            <Link to={"/"}>
              <FaBagShopping></FaBagShopping>
              SHOP
            </Link>
          </li>
          {/*  */}
          <li>
            <Link to={"/"}>
              <AiOutlineMail></AiOutlineMail>
              CONTACT
            </Link>
          </li>
          {/*  */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
