import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { IoLogoUsd } from "react-icons/io5";
import { FaBoxOpen, FaTruck, FaUsers } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });

  return (
    <div className="w-full m-5">
      <h1 className="text-3xl text-center">
        {" "}
        Hiii <span className="text-red-500">{user.displayName}</span>
      </h1>
      <div className=" ml-28 mt-5 justify-evenly stats shadow">
        <div className="stat">
          <div className="stat-figure text-3xl text-secondary">
            <IoLogoUsd></IoLogoUsd>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${stats.revenue}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        {/*  */}
        <div className="stat">
          <div className="stat-figure text-3xl text-secondary">
            <FaUsers className="-ml-9"></FaUsers>
          </div>
          <div className="stat-title">Customer</div>
          <div className="stat-value">{stats.users}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-3xl text-secondary">
            <FaBoxOpen></FaBoxOpen>
          </div>
          <div className="stat-title">Products</div>
          <div className="stat-value">{stats.products}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-3xl text-secondary">
            <FaTruck></FaTruck>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats.orders}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
