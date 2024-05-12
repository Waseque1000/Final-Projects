import React from "react";
import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  console.log(menu.length);
  const axiosSecure = useAxiosSecure();
  // delete function
  //   const handleDelete = () => {
  //     Swal.fire({
  //       title: "Are you sure?",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //   Swal.fire({
  //     title: "Deleted!",
  //     text: "Your file has been deleted.",
  //     icon: "success",
  //   });
  //         axiosSecure.delete(`/menu/${menu._id}`).then((res) => {
  //           console.log("deleted", res.data);
  //           refetch();
  //         });
  //       }
  //     });
  //   };

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          // refetch to update the ui

          Swal.fire({
            position: "top-end",
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            timer: 900,
          });
        }
      }
    });
  };

  return (
    <section className="w-full  ml-12">
      <SectionTitle
        subHeading={"Hurry Up"}
        heading={"Manage Items"}
      ></SectionTitle>
      <div className="mt-9">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                    <br />
                  </td>
                  <td className="text-right">${item.price}</td>
                  <td>
                    <button
                      //   onClick={() => handleMakeAdmin(user)}
                      className="btn btn-md bg-green-500"
                    >
                      <IoSettingsOutline
                        className="text-white
                                            text-2xl"
                      ></IoSettingsOutline>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}

              {/* row 2 */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageItems;
