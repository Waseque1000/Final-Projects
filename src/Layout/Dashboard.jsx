import { NavLink, Outlet } from "react-router-dom";

import {
  FaBeer,
  FaCalendar,
  FaHome,
  FaShoppingCart,
  FaUser,
  FaUserAlt,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import {
  FaBagShopping,
  FaBookTanakh,
  FaCodeFork,
  FaShop,
} from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineMail } from "react-icons/ai";
import { Helmet } from "react-helmet-async";
import useCart from "../Hooks/useCart";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { MdBook } from "react-icons/md";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO:
  const isAdmin = useAdmin();

  //
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

          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminhome"}>
                  <FaHome></FaHome>
                  Admin HOME
                </NavLink>
              </li>

              <li>
                <NavLink to={"/dashboard/additem"}>
                  <GiForkKnifeSpoon></GiForkKnifeSpoon>
                  Add Item
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manage"}>
                  <HiMiniBars3CenterLeft></HiMiniBars3CenterLeft>
                  MANAGE ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manage"}>
                  <MdBook></MdBook>
                  MANAGE BOKINGS
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/allusers"}>
                  <FaUsers></FaUsers>
                  ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
                  <div className="badge text-whitep bg-indigo-600 font-bold">
                    +{cart?.length || 0}
                  </div>
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
            </>
          )}

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
