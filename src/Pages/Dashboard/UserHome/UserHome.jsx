import React from "react";
import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div className="w-full m-4">
      <h2 className="m-4 text-3xl text-center ">Welcome {user.dislayName}</h2>
      <h2>user headquater</h2>
    </div>
  );
};

export default UserHome;
