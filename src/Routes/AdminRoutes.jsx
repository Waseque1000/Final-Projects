import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

//
const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  //
  const [isAdmin, isAdminLoading] = useAdmin();

  //
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="text-center  mt-10">
        <div>
          <span className=" loading bg-red-400   loading-dots loading-lg text-center"></span>
        </div>
        <progress className="progress bg-red-500 w-56"></progress>
      </div>
    );
  }

  if ((user, isAdmin)) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
