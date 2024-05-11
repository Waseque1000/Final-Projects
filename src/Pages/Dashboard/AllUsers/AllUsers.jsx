// import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet-async";
// import { FaTrashAlt } from "react-icons/fa";
// import { GrUserAdmin } from "react-icons/gr";
// import Swal from "sweetalert2";

// const AllUsers = () => {
//   //   const { data: users = [], refetch } = useQuery(["users"], async () => {
//   //     const res = await fetch(`http://localhost:5000/users`);
//   //     return res.json();
//   //   });

//   const { refetch, data: users = [] } = useQuery({
//     queryFn: async () => {
//       const res = await fetch(`http://localhost:5000/users`);
//       return res.json();
//     },
//   });

//   // delete

//   const handleMakeAdmin = (user) => {
//     // console.log(users);
//     fetch(`http://localhost:5000/users/admin/${user._id}`, {
//       method: "PATCH",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.modifiedCount) {
//           refetch();
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: `${user.name} is an Admin Now!`,
//             showConfirmButton: false,
//             timer: 900,
//           });
//         }
//       });
//   };

//   //
//   return (
//     <div className="w-full p-10">
//       <Helmet>
//         <title>Bistro Boss || All Users </title>
//       </Helmet>
//       <h3 className="text-3xl text-center mb-6 font-semibold">
//         Total User {users.length}
//       </h3>
//       <div className="overflow-x-auto">
//         <table className="table table-zebra">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Email </th>
//               <th>Role</th>
//               <th>Action </th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* row 1 */}
//             {users.map((user, index) => (
//               <tr key={user._id}>
//                 <th>{index + 1}</th>
//                 <td className="pr-20">{user.name}</td>
//                 <td className="pr-20">{user.email}</td>
//                 <td className="pr-7">
//                   {user.role === "admin" ? (
//                     "Admin"
//                   ) : (
//                     <button
//                       className="btn btn-ghost font-bold text-[22px]  text-green-600  "
//                       onClick={() => handleMakeAdmin(user)}
//                     >
//                       <GrUserAdmin></GrUserAdmin>
//                     </button>
//                   )}
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => handleDelete(user)}
//                     className="btn btn-ghost  text-red-600 text-[22px]"
//                   >
//                     <FaTrashAlt></FaTrashAlt>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AllUsers;

//TODO:

import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-md bg-orange-500"
                    >
                      <FaUsers
                        className="text-white
                                        text-2xl"
                      ></FaUsers>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
