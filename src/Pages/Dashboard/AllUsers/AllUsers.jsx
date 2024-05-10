import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import Swal from "sweetalert2";

const AllUsers = () => {
  //   const { data: users = [], refetch } = useQuery(["users"], async () => {
  //     const res = await fetch(`http://localhost:5000/users`);
  //     return res.json();
  //   });

  const { refetch, data: users = [] } = useQuery({
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`);
      return res.json();
    },
  });

  // delete
  const handleDelete = (user) => {
    // Swal.fire({
    //   title: "Are you sure?",
    //   //   text: "You won't be able to revert this!",
    //   icon: "question",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     fetch(`http://localhost:5000/users/${user._id}`, {
    //       method: "DELETE",
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         if (data.deletedCount > 0) {
    //           refetch();
    //           Swal.fire({
    //             title: "success!",
    //             icon: "success",
    //             confirmButtonText: "Cool",
    //           });
    //         }
    //       });
    //   }
    // });
  };

  // ? admin
  //   const handleMakeAdmin = (user) => {
  //     fetch(`http://localhost:5000/users/admin/${user._id}`, {
  //       methord: "PATCH",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.modifiedCount) {
  //           refetch();
  //           Swal.fire({
  //             position: "top-end",
  //             icon: "success",
  //             title: `${user.name} is an Admin Now!!`,
  //             showConfirmButton: false,
  //             timer: 900,
  //           });
  //         }
  //       });
  //   };

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 900,
          });
        }
      });
  };

  //
  return (
    <div className="w-full p-10">
      <Helmet>
        <title>Bistro Boss || All Users </title>
      </Helmet>
      <h3 className="text-3xl text-center mb-6 font-semibold">
        Total User {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email </th>
              <th>Role</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td className="pr-20">{user.name}</td>
                <td className="pr-20">{user.email}</td>
                <td className="pr-7">
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      className="btn btn-ghost font-bold text-[22px]  text-green-600  "
                      onClick={() => handleMakeAdmin(user)}
                    >
                      <GrUserAdmin></GrUserAdmin>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost  text-red-600 text-[22px]"
                  >
                    <FaTrashAlt></FaTrashAlt>
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
