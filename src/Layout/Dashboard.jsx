import { NavLink, Outlet } from "react-router-dom";

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
import { Helmet } from "react-helmet-async";

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
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full pt-10 bg-[#D1A054] text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink>
              <FaHome></FaHome>
              USER HOME
            </NavLink>
          </li>

          <li>
            <NavLink to={"/dashboard/mycart"}>
              <FaShoppingCart> </FaShoppingCart>
              MY CART
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaWallet></FaWallet>
              PAYMENT HISTORY
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaCalendar></FaCalendar>
              RESERVATION
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaBookTanakh></FaBookTanakh>
              MY BOOKINGS
            </NavLink>
          </li>
          <div className="divider"> </div>
          {/*  */}
          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome>
              HOME
            </NavLink>
          </li>
          {/*  */}
          <li>
            <NavLink to={"/menu"}>
              <TiThMenu></TiThMenu>
              MENU
            </NavLink>
          </li>
          {/*  */}
          <li>
            <NavLink to={"/"}>
              <FaBagShopping></FaBagShopping>
              SHOP
            </NavLink>
          </li>
          {/*  */}
          <li>
            <NavLink to={"/"}>
              <AiOutlineMail></AiOutlineMail>
              CONTACT
            </NavLink>
          </li>
          {/*  */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
